/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './ResultBox.css';

const ResultBox = props => {
	const { result, warning, error, reset } = props;
	const maxLength = props.maxLength || 50;

	const [copied, setCopied] = useState(undefined);
	const [autoCopy, setAutoCopy] = useState(false);

	useEffect(() => {
		if (autoCopy && !error && result.length < maxLength) {
			navigator.clipboard.writeText(result);
			setCopied(result);
		}
	}, [result, autoCopy, error, maxLength]);

	return (
		<div className="result-box">
			<div className={result.length > maxLength ? 'result' : result === copied ? 'result copied-good' : 'result'}>
				<span className="result-regex">{result}</span>
				{result.length > maxLength && <div className="error">Error: {result.length} / 不能超過50個字符限制</div>}
				{!error && result.length <= maxLength && result.length > 0 && <div className="size-info">length: {result.length} / {maxLength}</div>}
				{error && <div className="error">Error: {error}</div>}
				{warning && <div className="warning">{warning}</div>}
			</div>
			<div className="result-action">
				<div className="button-group">
					<button
						className="copy-button"
						onClick={() => {
							setCopied(result);
							navigator.clipboard.writeText(result);
						}}
					>
						複製
					</button>
					<button
						className="reset-button"
						onClick={reset}
					>
						重置
					</button>
				</div>
				<AutoCopyCheckbox value={autoCopy} onChange={setAutoCopy}/>
			</div>
		</div>
	);
};

const AutoCopyCheckbox = props => (
	<label className="auto-copy">
		<input
			type="checkbox" className="checkbox-autocopy" checked={props.value}
			onChange={e => props.onChange(e.target.checked)}/>
		<span className="auto-copy-text">自動複製</span>
	</label>
);

export default ResultBox;


let prevText = null;

function updateDiv() {
    
    let sourceSpans = document.getElementsByClassName('captions-text');
    if (sourceSpans.length > 0) {
        let sourceSpan = sourceSpans[0];

        let text = sourceSpan.innerText;

        if (text !== prevText) {
            prevText = text;

            let targetDiv = document.getElementById('crapsag');
            if (!targetDiv) {
                targetDiv = document.createElement('div');
                targetDiv.id = 'crapsag';
                targetDiv.style.margin = '10px'; 
                targetDiv.style.padding = '10px';
                targetDiv.style.fontSize = '20px'; 
                targetDiv.style.textAlign = 'center'; 
                targetDiv.style.backgroundColor = 'rgba(139, 0, 0, 0.5)';
                targetDiv.style.borderRadius = '10px';
                let aboveTheFoldDiv = document.getElementById('above-the-fold');
                if (aboveTheFoldDiv) {
                    aboveTheFoldDiv.insertBefore(targetDiv, aboveTheFoldDiv.firstChild);
                }
            }

            targetDiv.innerText = text;
        }
    }
}
setInterval(updateDiv, 100);

(function () {
    const LetterGrow = {
        init() {
            this.eTitres = document.querySelector('.jump');
            this.aLettres = this.eTitres.textContent;
            document.documentElement.classList.add('js-enabled');
            this.ChangeTitre(this.eTitres);
            for (const eLettre of this.aLettres) {
                const eSpan = document.createElement('span');
                if (eLettre === ' '){
                    eSpan.appendChild(document.createTextNode('\u00A0'));
                }else{
                    eSpan.appendChild(document.createTextNode(eLettre));
                }
                this.eTitres.appendChild(eSpan);
            }
        },
        ChangeTitre() {
            this.eTitres.textContent = "";
        }
    };
    LetterGrow.init();
})();
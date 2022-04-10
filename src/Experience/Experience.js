class Experience
{
    constructor()
    {
        // Singleton
        if (Experience.instance)
        {
            return Experience.instance
        }
        Experience.instance = this

        // Info
        this.infoButtonHTML = document.getElementById('info-button')
        this.infoSectionHTML = document.getElementById('info-section')
        this.infoCloseHTML = document.getElementById('info-close')

        // Onclick Event
        this.onClick()
    }

    onClick()
    {
        this.infoButtonHTML.onclick = () => {this.makeInfoPageVisible()}
        this.infoCloseHTML.onclick = () => {this.makeInfoPageInvisible()}
    }

    makeInfoPageVisible()
    {
        this.infoSectionHTML.classList.replace('invisible', 'visible')
    }

    makeInfoPageInvisible()
    {
        this.infoSectionHTML.classList.replace('visible', 'invisible')
    }
}

export default Experience
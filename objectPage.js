const { ElementArrayFinder, $, $$ } = require('protractor')

class PageMap {

    constructor() {
        this.selectors = $$('.Select-placeholder')
        this.mapWithFilters = $('.MapWithFilters')
    }

    async areDisplayed(selectors) {
        let countSel = await selectors.count()
        let i
        let areElem
        for (i=0; i < countSel; i++){
            let get = await selectors.get(i).isDisplayed()
        
            if (await get != false) {
                areElem = true
            } else {
                return false
            }
        }
        return areElem
    }

    async choosOptions(selectors) {
        const listCount = await selectors.count()
        await console.log(listCount)
        //for (let i = 0; i < listCount; i++) {
            let list = await selectors.get(0)
            await list.click()

            let dfg = await $('.Select-menu-outer').getCssValue()
            //let dag = await dfg.$$('option').count()

            // let opt = await dfg.$$('option')
            await console.log(dfg.length, dfg)
            // let options = await list.$$('option')
            // await console.log(options)
            // let optionCount = await options.count() - 1

            // let random = await Math.floor(Math.random() * optionCount) + 1;
            // let optRand = await options.get(random)
            // await console.log(optRand)
            // await optRand.click()

        //}
    }
}

module.exports = PageMap;
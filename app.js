const ItemCtrl = (function () {

    // const Item = function (id, name, calories) {
    //     this.id = id
    //     this.name = name
    //     this.calories = calories
    // }

    const data = {
        items: [
            {

                id: 0, name: 'dinner', calories: 1220
            },
            {

                id: 0, name: 'lunch', calories: 1020
            },
            {

                id: 0, name: 'breakfast', calories: 100
            },
        ],
        currentItem: null,
        totalCalories: 0
    }

    return{
        logData: function(){
            return data
        }
    }

})()

const UICtrl = (function(){



})()

const App = (function(ItemCtrl, UICtrl){

    return{
        init: function(){
            console.log('App initializing....')
        }
    }

})(ItemCtrl,UICtrl)

App.init()
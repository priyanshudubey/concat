module.exports = {
    concString : function(str, loc, toAdd){
        if(loc = 'front'){
            return (toAdd + str)
        }
        else{
            return (str + toAdd)
        }
    }
}

var dog = (function () {

    var Name;
    var Type;
    var id;
    var dateOfBirth;
    var sex;
    var mother;
    var father;
    var buyerId;
    var BuyerName;


    function dogCTOR(i_dateOfBirth, i_Name, i_Type, i_id, i_sex, i_father, i_mather,i_buyerId) {
        Name = i_Name;
        Type = i_Type;
        id = i_id;
        dateOfBirth = i_dateOfBirth;
        sex = i_sex;
        father = i_father;
        mother = i_mather;
        BuyerName = "None";
        buyerId = i_buyerId;
        
    }

    dogCTOR.prototype.addDog = function (i_Param1) {
        print("please enter the Name of the dog");
        
        
    };

    return dogCTOR;

})();

var Dog = "spaike";
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    };
    }

var HouseKeeper1 = new HouseKeeper(5, "Andi", ["bathroom", "kitchen", "bedroom"]);

HouseKeeper1.clean();
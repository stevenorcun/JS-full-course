
// **********************  Budget Controller ******************************
var budgetController = (function () {

    // Function Contructor to create Income Object
    // Represent an Income Object
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    // Represent an Expense Object
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0)
            this.percentage = Math.round((this.value / totalIncome) * 100);
        else
            this.percentage = -1;
    }

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    // Data of the application, as a MOCK BD
    var data = {
        allItmes: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        average: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItmes[type].forEach(el => {
            sum += el.value;
        });
        data.totals[type] = sum;
    }

    var calculateAverage = function (type) {
        var sum = 0, avg = 0;
        data.allItmes[type].forEach(el => {
            sum += el.value
        })
        avg = sum / (data.allItmes[type].length);
        data.average[type] = avg;
    }

    var testing = function () {
        console.log(data);
    }

    // All public method or data useable from outside 
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            if (data.allItmes[type].length > 0)
                ID = data.allItmes[type][data.allItmes[type].length - 1].id + 1;
            else
                ID = 1;
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItmes[type].push(newItem);
            return newItem;
        },
        deleteItem: function (type, id) {
            var ids, index;
            // La methode map renvoie un nouveau tableau de même taille en fonction
            // du return de la méthode callback.
            // On peut par exemple récupérer seuleument les ID, les values, des booleéns...
            ids = data.allItmes[type].map(function (current) {
                return current.id;
            })
            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItmes[type].splice(index, 1);
            }
        },
        testing: testing,

        calculateBudget: function () {
            // Calculate total incomeand expense
            calculateTotal("inc");
            calculateTotal("exp");
            // Calculate average
            calculateAverage("inc");
            calculateAverage("exp");
            // Calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;
            // Calculate the percentageof income that we spent
            if (data.totals.inc > 0)
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            else {
                data.percentage = -1;
            }
        },
        calculatePercentages: function () {
            data.allItmes.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            })
        },
        getPercentages: function () {
            var allPerc;
            allPerc = data.allItmes.exp.map(function (current) {
                return current.getPercentage();
            })
            return allPerc;
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                percentage: data.percentage
            }
        }
    }

})();

// **********************  UI Controller ******************************
var UIController = (function () {

    // We create an object for the className in the DOM to centrilaze them in one place
    // So when we change name in the DOM we have just one place to retrieve them in the JS file
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'

    };

    var formatNumber = function (num, type) {
        var num, numSplit, int, bigInt, dec;

        num = Math.abs(num);
        // Return a String
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    }

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    // All public method visible from the outside
    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either exp or inc
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description"'
                    + '>%description%</div ><div class="right clearfix"><div class="item__value">'
                    + '%value%</div><div class="item__delete"><button class="item__delete--btn">'
                    + '<i class="ion-ios-close-outline"></i></button></div></div></div >'
            }
            else if (type === "exp") {
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">'
                    + '%description%</div ><div class="right clearfix"><div class="item__value">'
                    + '%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
                    + '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>'
                    + '</div></div></div >';
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deletItem: function (selectorID) {
            // en JS pour delete un elem :
            // 1 - on selectionne l'element
            // 2 - on appelle son parent
            // 3 - on spécifie l'element qu'on souhaite supprimmer.
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        getDomStrings: function () {
            return DOMStrings;
        },
        clearFields: function () {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', '
                + DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            })

            fieldsArr[0].focus();
        },
        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = "inc" : type = "exp";

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalIncome, "inc");
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExpenses, "exp");

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }
        },
        displayPercentages: function (percentages) {
            var fields;
            fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = percentages[index] + '---';
                }
            })
        },
        displayMonth: function () {
            var now, year, month, months;
            months = ['Janvier', 'Février', 'Mars', "Avril", "Mai", 'Juin', "Juillet", "Aout",
                "Septembre", "Octobre", "Novembre", "Décembre"
            ]
            now = new Date();
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        changedType: function () {
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue
            )

            nodeListForEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            })

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        }
    }
})();

// **********************  Global Controller ******************************
var controller = (function (budegtCtrl, UIctrl) {

    var setupEventListeners = function () {
        var DOMSelectors = UIctrl.getDomStrings();
        console.log(DOMSelectors);

        document.querySelector(DOMSelectors.inputBtn).addEventListener('click', controlAddItem)

        document.addEventListener('keypress', function (e) {
            if (e.key === "Enter" || e.which === 13) {
                controlAddItem();
            }
        });
        // Here concept of event bubling, all click on the childrens of container are catch. 
        document.querySelector(DOMSelectors.container).addEventListener('click', crlDeleteItem);

        document.querySelector(DOMSelectors.inputType).addEventListener('change', UIctrl.changedType);
    };

    var updateBudget = function () {
        // Calculate the budget
        budegtCtrl.calculateBudget();
        // Return the budget
        var budget = budegtCtrl.getBudget();
        // Displaythe budget in the UI
        UIctrl.displayBudget(budget);
    };

    var updatePercentages = function () {
        // Calculate perc
        budegtCtrl.calculatePercentages();

        // Update budgetCTRL
        var percentages = budegtCtrl.getPercentages();

        // Update the UI
        UIctrl.displayPercentages(percentages);
    };

    var controlAddItem = function () {
        var input, newItem;
        // GET INPUT THE FIELD INPUT DTA
        input = UIctrl.getInput();
        if (input.description != '' && !isNaN(input.value) && input.value > 0) {
            // Add the item to the budget controller
            newItem = budegtCtrl.addItem(input.type, input.description, input.value);
            // Add to the UI interface
            UIctrl.addListItem(newItem, input.type);
            // Clear the html input
            UIController.clearFields();
            // Calculate the budget
            updateBudget();
            // Calculate and update the percentages
            updatePercentages();
        }
    }

    var crlDeleteItem = function (event) {
        var itemID, splitID, type, ID;
        // Here concept of DOM traversing
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            // income-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the object from the data structure
            budegtCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
            UIctrl.deletItem(itemID);

            // 3. Update the new show of the budget
            updateBudget();

            // 4. Calculate and update the percentages
            updatePercentages();
        }
    };

    return {
        init: function () {
            console.log("App has started")
            UIctrl.displayMonth();
            UIctrl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: 0
            })
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();




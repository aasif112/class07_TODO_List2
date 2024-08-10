


import inquirer from "inquirer";

let todoArray:string[] = []
let comfirmation = true


while(comfirmation) {
    let todoQuestions = await inquirer.prompt([
        {   message:"Type Task you want to add in your Todo-List?",
            type:"input",   name:"firstQuestion"
        },
    ])
    // console.log(todoQuestions.firstQuestion)
    // console.log(todoQuestions.secondQuestion)
    
    
    if((todoQuestions.firstQuestion).trim()) {
        todoArray.push((todoQuestions.firstQuestion).trim())       
        console.log(todoArray)    
    } else if(!(todoQuestions.firstQuestion).trim()) {
        console.log(`Please Enter a Valid Input`)
        console.log(todoArray)
    }
    
    let newtTask = await inquirer.prompt([
            {   message:"Would you like to add more in your Todo-List?",
                type:"confirm",     name:"yesNo",
                default:"true"    // If there is no reply
            },
        ])
        comfirmation = newtTask.yesNo    
    }
    


// Printing Tasks List:
console.log(`\nYou added ${todoArray.length} Tasks, in Your Todo-List:`)
for(let i=0; i<todoArray.length; i++) {
    console.log(`\tTask-${i+1}:\t${todoArray[i]}`)
} 

// UPDATED LIST
function updateList() {
    console.log(`\nYour Updated Task List is:`)
    for(let i=0; i<todoArray.length; i++) {
    console.log(`\tTask-${i+1}:\t${todoArray[i]}`)
    }
}


let changes = true;

while(changes) {
    let askChanges = await inquirer.prompt([
        {   message:"Do you want make any changes:",
            type:"confirm",     name:"changesReply",
            default: "true"
        }, 
    ])
    // MAKE IF CONDITION HERE 
    if(askChanges.changesReply) {
        let changeType = await inquirer.prompt([
            {   message:"What changes do you want to make?",
                type:"list" ,    name:"changeType",
                choices:["Edit", "Remove", "Add"]
            }
        ])
        if(changeType.changeType === "Edit" || changeType.changeType === "Remove") {
            let taskNumber = await inquirer.prompt([
                {   message:`Enter Task-Number you want to ${changeType.changeType}:`,
                    type:"number" , name:"taskNumber"
                },
            ])
                
            if(taskNumber.taskNumber>0 || taskNumber.taskNumber<=todoArray.length) {
                console.log(`You want to ${changeType.changeType}  'Task-${taskNumber.taskNumber}: ${todoArray[taskNumber.taskNumber-1]}'`)
            
            
            }
        
        if(changeType.changeType === "Edit") {
            let EditTask = await inquirer.prompt([
                {   message:`Edit/Update selected task:`,
                    type:"input", name:"newTask"
                }
            ])
        
            todoArray[taskNumber.taskNumber-1] = EditTask.newTask
            // UPDATED LIST
            updateList()
        }
        
        if(changeType.changeType === "Remove") {
            let removeTask = await inquirer.prompt([
                {   message:`Are you sure to Remove the selected task:`,
                    name:"removeTask",  type:"confirm",
                    default:"false"
                    
                }
            ])
        
            if(removeTask.removeTask) {
                todoArray.splice(taskNumber.taskNumber-1,1)
            }
            // UPDATED LIST
            updateList()
        }
        }

        // Else if "Add" - selected: 
        else {  let addTask = await inquirer.prompt([
                {   message:`Enter new Task you want to Add:`,
                    name:"addTask",  type:"input",
                },
                {   message:`Set Task number for new Task:`,
                    name:"taskNumber",  type:"number"
                }
            ])
            let newTask = addTask.addTask
            todoArray.splice(addTask.taskNumber-1,0,newTask)
            // UPDATED LIST
            updateList()
        }

    }

    changes = askChanges.changesReply
}
















// TODO: If no task Entered it should display a Message: ---MADE FOR EMPTY '' Entry TO-make If someone Just enters Spaces: '   ' 
// Print the final list in a line | Like Factorial-function

// Read-list item: Print all + Editi/update a task + Delete a Task in tod + Add if A task is remaining
 




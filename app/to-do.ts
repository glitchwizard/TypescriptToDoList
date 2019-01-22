class Task{
  done: boolean;

  constructor(public description: string, public priority: string){
    this.done = false;
  }

  markDone(){
    this.done = true;
  }
}


var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'Medium'));
tasks.push(new Task('Buy Chocolate', 'Low'));
tasks.push(new Task('Do Laundry', 'High'));

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}

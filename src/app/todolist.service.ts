import { Injectable } from '@angular/core';
import { ToDoItem } from './todolist-model';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private toDoList: ToDoItem[] = [
    {
      image: "../ex2-images/Walking-dog.jpg",
      title: "Take the dog for a walk",
      details: "Go to Prater Hundezone - Don't forget water and treats!",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Gym.jpg",
      title: "Go to the Gym",
      details: "Run:30 mins - Biceps - UpperBack - LowerBack",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Doctor.jpg",
      title: "Doctor Appointment",
      details: "Tell Ms. Hudson that you finally managed to grow hair by pure concentration",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Meditate.jpg",
      title: "Meditate",
      details: "Calm your mind, think about all the positive aspects of your life...",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/C.jpg",
      title: "Learn C++",
      details: "Because everyone needs some bitter moments in life to appreciate little things",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/AuntGrace.jpg",
      title: "Visit Aunt Grace",
      details: "She said she is making Pumpkin Pie, you'd better not miss it! and call your cousin",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Coding.jpg",
      title: "Practice Coding for 12 Hours",
      details: "Monday: 3hrs - Tuesday: 3hrs - Wed: 2hrs - Thur: 2hrs - Fri:2hrs",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Grocery.jpg",
      title: "Go Grocery-shopping",
      details: "Potatoes, Carrots, Onions, Broccoli, Yoghurt, Milk, Cheese",
      priority: 0,
      deadline: "10.06.2024"
    },
    {
      image: "../ex2-images/Football.jpg",
      title: "Go to Football Training",
      details: "Bring: Shoes, drinks, Couscous Salad, towel - Call Jonathan ",
      priority: 0,
      deadline: "10.06.2024"
    }
  ];

  private completedItems: ToDoItem[] = [];

  getToDoList(): ToDoItem[] {
    return this.toDoList;
  }

  getCompletedItems(): ToDoItem[] {
    return this.completedItems;
  }

  addCompletedItem(item: ToDoItem): void {
    this.completedItems.push(item);
  }

  deleteToDoItem(index: number): void {
    this.toDoList.splice(index, 1);
  }

  incrementPriority(index: number): void {
    if (this.toDoList[index].priority < 5) {
      this.toDoList[index].priority++;
    } else {
      this.toDoList[index].priority = 0;
    }
  }

  sortToDoList(): void {
    this.toDoList.sort((a, b) => b.priority - a.priority);
  }
}

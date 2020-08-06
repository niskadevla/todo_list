// export class Todo {
//   constructor() {
//
//   }
//
//   removeTodo(id) {
//     for (let i = 0; i < todos.length; i++) {
//       if (todos[i].id === id) {
//         todos.splice(i,1);
//
//         break;
//       }
//     }
//
//     this.renderTodoList(todos);
//   }
//
//   getTodo({id, date, expdate, title}) {
//     let html = '';
//     // const onRemove = self.removeTodo;
//     // console.log(onRemove);
//     const li = document.createElement('li');
//     li.classList.add('todolist-item');
//
//     return html = `
//       <li class="todolist-item">
//         <ul class="todo">
//           <li class="todo-item col" >${id}</li>
//           <li class="todo-item col" >${date}</li>
//           <li class="todo-item col" >${expdate}</li>
//           <li class="todo-item col" >${title}</li>
//           <li class="todo-item col" >
//             <button class="btn btn-danger" type="button" onclick="removeTodo(${id})" data-id="${id}">&times;</button>
//           </li>
//         </ul>
//       </li>
//     `
//   }
// }
//
// // <li class="todolist-item">
// //   <ul class="todo">
// //     <li class="todo-item col" >${id}</li>
// //     <li class="todo-item col" >${date}</li>
// //     <li class="todo-item col" >${expdate}</li>
// //     <li class="todo-item col" >${title}</li>
// //     <li class="todo-item col" >
// //       <button class="btn btn-danger" type="button" data-id="${id}">&times;</button>
// //     </li>
// //   </ul>
// // </li>

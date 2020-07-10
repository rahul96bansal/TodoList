
// if (updatedItems[i].completed) {
//   completedItems = completedItems.concat(updatedItems.slice(i, i + 1));
// } else {
//   uncompletedItems = uncompletedItems.concat(updatedItems.slice(i, i + 1));
// }

// if (keys.includes(arr[i].key)) {
//   arr[i].selected = false;
//   if (updateType === "single") arr[i].completed = !arr[i].completed;
//   else arr[i].completed = updatedValue;
//   console.log("printing arr value", arr[i]);
// }


//   checkedTask = (item, e) => {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       this.props.checkOrUncheckTask(item, e.target.className);
//     } else if (e.target.tagName === "SPAN" && e.target.className !== "close") {
//       e.target.parentNode.classList.toggle("checked");
//       this.props.checkOrUncheckTask(item, e.target.parentNode.className);
//     }

//     console.log("inside checked", e.target);
//   };

//   checkOrUncheckTask = (item, myClassName) => {
//     console.log("item value", item, myClassName);
//     this.setState(
//       (prevState) => {
//         const index = prevState.items.findIndex(
//           (value) => value.key === item.key
//         );
//         let finalItems = prevState.items;
//         if (index === -1 && myClassName === "checked") {
//           finalItems = [item].concat(prevState.items);
//         } else if (index !== -1 && !(myClassName === "checked")) {
//           finalItems = prevState.items.splice(index, 1);
//         }
//         return {
//           items: finalItems,
//         };
//       },
//       () => console.log("my checked value", this.state.items)
//     );
//   };

// taskOperation = (e) => {
//     console.log("my checked items", this.state.items);
    
//     const operationType = e.target.value
    

//     if (operationType === "clearTasks") {
//       this.props.deleteItems(keys);
//     } else if (operationType === "completeTasks") {
//       this.props.completeItems(true);
//     } else if (operationType === "uncompleteTasks") {
//       this.props.completeItems(false);
//     } else {
//       throw new Error("message");
//     }
//   };

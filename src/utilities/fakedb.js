// use local storage to manage data

const getAppliedJobs = () => {
  let appliedJobs = {};

  //get the applied jobs from local storage
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

/*
getAppliedJobs: This function retrieves the applied jobs object from local storage. If the object is not found in local storage, an empty object is returned.
*/

const addToDb = (id) => {
  let appliedJobs = getAppliedJobs();
  // add quantity
  const quantity = appliedJobs[id];
  if (!quantity) {
    appliedJobs[id] = 1;
  } else {
    alert("already applied");
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

/*addToDb: This function is used to add items to the data. It first calls getAppliedJobs to retrieve the existing data object from local storage. If the item being added is already in the data, the function sends an alert. If the item is not in the data, it is added with a quantity of 1. The updated data object is then saved to local storage.
 */

const removeFromDb = (id) => {
  const appliedJobs = getAppliedJobs();
  if (id in appliedJobs) {
    delete appliedJobs[id];
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

/*
removeFromDb: This function is used to remove items from the data. It first calls getAppliedJobs to retrieve the existing data object from local storage. If the item being removed is in the data, it is deleted from the data object. The updated data object is then saved to local storage.
*/

const deleteAppliedJobs = () => {
  localStorage.removeItem("applied-jobs");
};

/*
deleteAppliedJobs: This function is used to completely clear the applied jobs. It simply calls localStorage.removeItem('applied-jobs') to remove the applied jobs object from local storage.
*/

export { addToDb, removeFromDb, getAppliedJobs, deleteAppliedJobs };

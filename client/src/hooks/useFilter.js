import { useState } from 'react';

export default (jobList) => {
  const [filtered, setFiltered] = useState(jobList);
  const filteredList = (event) => {
    const search = event.target.value.toLowerCase();
    let updatedList = jobList;
    updatedList = updatedList.filter(job => {
      return job.title.toLowerCase().search(search) !== -1;
    });
    setFiltered(updatedList);
  };
  return {
    filtered,
    onChangeText: (event) => {
      filteredList(event);
    },
  };
};
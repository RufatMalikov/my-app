import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "ненужная вещь" },
    { id: 1, value: 4, name: "ложка" },
    { id: 2, value: 0, name: "вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "ненужная вещь" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const countersPlus = counters.map((element) => {
      if (element.id === id) {
        element.value += 1;
      }
      return element;
    });
    console.log(countersPlus);
    setCounters(countersPlus);
  };
  const handleDicrement = (id) => {
    const countersMinus = counters.map((element) => {
      if (element.id === id) {
        element.value -= 1;
      }
      return element;
    });

    setCounters(countersMinus);
  };

  const handleDelete = (id) => {
    console.log("handleDelete", id);
    const newCounters = counters.filter((c) => c.id !== id);
    //console.log(counters);
    //console.log(newCounters);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={handleIncrement}
          onDicrement={handleDicrement}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;

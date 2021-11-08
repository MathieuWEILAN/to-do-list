import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todolist = (props) => {
  const { handleTask, task, list, addTask, setList, handleChecked, sortList } =
    props;

  return (
    <div className="to-do">
      <div>
        {sortList.map((task, i) => {
          return (
            <div key={i} className="to-do-list">
              <input
                type="checkbox"
                onChange={() => {
                  handleChecked(i);
                }}
                checked={task.checked ? true : false}
              />
              <p className={task.checked && "underline"}> {task.text}</p>
              <button
                onClick={() => {
                  {
                    const newList = [...list];
                    newList.splice(i, 1);
                    setList(newList);
                  }
                }}
              >
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
          );
        })}
      </div>
      <form onSubmit={addTask}>
        <input
          className="search"
          type="text"
          onChange={handleTask}
          placeholder="Write your to do list"
        />
        <input className="add-task" type="submit" value="Add task" />
      </form>
    </div>
  );
};

export default Todolist;

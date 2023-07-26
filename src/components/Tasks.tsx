import { useState } from "react";
import styles from "./Tasks.module.css";
import { Trash, Circle, CheckCircle, PlusCircle } from "@phosphor-icons/react";

export default function Tasks({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const [taskUncheck, setTaskUncheck] = useState([]);
  const [taskCheck, setTaskCheck] = useState(0);
  const [newTask, setNewTask] = useState("");

  function changeStatusTask(item) {
    console.log(item);

    if (item.status === true) {
      item.status = false;
      setTaskCheck(taskCheck - 1);
    } else {
      item.status = true;
      setTaskCheck(taskCheck + 1);
    }

    setTaskList([...taskList]);
  }

  function deleteTask(item) {
    console.log(item);
    const taskRef = taskList.filter((task) => task.id !== item);
    setTaskList(taskRef);
  }

  function handleNewTask(e) {
    e.preventDefault();

    const newTaskObj = {
      id: taskList.length,
      content: `${newTask}`,
      status: false,
    };

    console.log(newTaskObj.status);

    setTaskList([...taskList, newTaskObj]);
    setNewTask("");
  }

  return (
    <>
      <header className={styles.midlle}>
        <div className={styles.forms}>
          <form className={styles.formTask} onSubmit={handleNewTask}>
            <input
              type="text"
              placeholder="Adicione sua tarefa"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />

            <div className={styles.btn_Create}>
              <button type="submit">
                Criar
                <PlusCircle size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className={styles.topContent}>
          <div className={styles.tasksCreated}>
            <p>Tarefas Criadas</p>
            <span>{taskList.length}</span>
          </div>

          <div className={styles.tasksFinished}>
            <p>Tarefas Finalizadas</p>
            <span>{taskCheck}</span>
            <span>de</span>
            <span>{taskList.length}</span>
          </div>
        </div>
      </header>

      <main>
        {taskList.map((item) => (
          <div className={styles.tasks} key={item.content}>
            <button className={styles.btnUnCheck}>
              {item.status ? (
                <CheckCircle
                  className={styles.btnCheck}
                  size={25}
                  onClick={() => changeStatusTask(item)}
                />
              ) : (
                <Circle
                  className={styles.btnUnCheck}
                  size={25}
                  onClick={() => changeStatusTask(item)}
                />
              )}
            </button>
            {item.status ? (
              <p className={styles.TaskFinished}>{item.content}</p>
            ) : (
              <p>{item.content}</p>
            )}

            <button>
              <Trash
                size={30}
                className={styles.trash}
                onClick={() => deleteTask(item.id)}
              />
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

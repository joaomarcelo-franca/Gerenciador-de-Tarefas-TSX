interface ButtonProps {
  onAddTaskSubmit: (a: string, b: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  title: string;
  description: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => {
        if (!props.title.trim() || !props.description.trim()) {
          return alert("Campos Vazios");
          // Os Campos que estao vazios mudarem o placeholder e ficar com border vemelho
        }
        props.onAddTaskSubmit(props.title, props.description);
        props.setTitle("");
        props.setDescription("");
      }}
      className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
    >
      Adicionar Tarefa
    </button>
  );
}
export default Button;

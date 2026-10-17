function Title(props: { title: string }) {
  return (
    <h1 className="text-slate-100 text-3xl font-bold text-center ">
      {props.title}
    </h1>
  );
}
export default Title;

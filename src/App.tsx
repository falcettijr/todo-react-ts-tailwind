export default function App() {
  return (
    <>
    <div className="mx-auto max-w-4xl w-full my-12">

      <h1 className="mx-auto text-5xl font-bold my-12 text-center text-slate-300">
        Lista de Tarefas
      </h1>

      <form className="w-full">
        <input
          type="text"
          className="w-full text-slate-30 space-y-6 outline-none p-2 bg-transparent spaceplaceholder: tracking-tighter font-semibold text-2xl"
          placeholder="Adicione uma tarefa" />
      </form>
      <div className="h-px bg-slate-700 my-2"></div>
    </div>

    <div>
      
    </div>

    </>
  )
}
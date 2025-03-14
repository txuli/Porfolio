const Template =() => {
    return (
        
        
  <article class="max-w-sm w-full bg-gray-600/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all ">
    <div class="relative">
      <img 
        src="https://photos.txuli.com/fotoproyecto1.jpg"
        alt="Product"
        class="w-full h-52 pt-2 bg-white object-cover"
      />
      <span class="absolute top-1 right-3 bg-purpleSymply text-white px-3 py-1 rounded-full text-sm font-medium">
        Under development
      </span>
    </div>
    
    <main class="p-5 space-y-4">
      <header>
        <h3 class="text-xl font-bold text-white">Durangaldeko-BZK official page</h3>
        <p class="text-gray-500 mt-1">NextJs, npm, react, tailwindcss, better-auth</p>
      </header>
      
     

      <button class="w-full bg-purpleSymply/40 hover:bg-purpleSymply/30 text-white font-medium py-3 rounded-lg transition-colors" onClick={() => window.open('https://github.com/txuli/durangaldekobizikletaeskola.com')}>
        View repo
      </button>
    </main>
  </article>

    )
}
export default Template;
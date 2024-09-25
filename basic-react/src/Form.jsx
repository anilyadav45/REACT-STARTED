function submitHandler(event){
    console.log("form was submitted"); //without prevent if we directly access this method in form the behaviour of form will occur so to stop that we use event.preventDefault there are many properties but we mostly use this preventDefault in form
    //let's see with and without prevent 
    event.preventDefault();
}

export default function (){
   return (
    <>
    <form>
        <input type="text" placeholder="Write Something" />
        <button onClick={submitHandler}>Submit</button>
    </form>
    </>
   )
}
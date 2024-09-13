function messageBox({userName,Color}){
    let styles = {color:Color};
    return <>
    <p>
        <h4 style={styles}>{userName}</h4>
    </p>
    </>
}

export default messageBox;
//this is assingnmeant question for displaying username as different color acc to users
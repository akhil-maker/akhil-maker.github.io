body, html{
    height: 100%;
    margin: 0;
}
#firstLook {
    background-image: url('galaxy.gif'); 
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: auto;
    justify-content: center;
    display: flex;
    font-size: xx-large;
    color: navy;
    font-weight: bold;
}

.btn-welcome{
    cursor: pointer;
    margin: 25px 0px 25px 0px;
    border: none;
    border-radius: 200px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%);
    font-weight: 400;
    font-size: larger;
    background-color: cornflowerblue;
}

#preface{
    background-color: #0e0e2a;
    height: 50%;
    display: flex
}

#akhilName{
    width: 50%;
    border-radius: 80%;
}

#introPara{
    width: 50%;
    color: #d410ed;
    flex: 50%;
    text-align: center;
    align-self: center;
    font-size: -webkit-xxx-large;
    font-style: italic;
    font-family: GT Zirkon,Helvetica,Arial,sans-serif;
}

#footer{
    background-color: darkgray;
    padding: 2rem 7rem 2rem 7rem;
    display: flex;
}

#footer:hover{
    filter: brightness(0.75);
    color: #4f0ef5;
}

.logoimg{
    margin: 0px 10px 0px 10px;
    width: 37px;
    height: 37px;
    object-fit: cover;
    object-position: 50% 50%;
}

.projectCard{
    position: relative;
    background-size: cover;
    background-position: 50%;
    min-height: 430px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    margin-left: 1.5rem;
    background-color: rebeccapurple;
}

#projectTrain{
    margin: 0 5rem;
    display: flex;
}

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    margin: 0 5rem 5rem 5rem;
}

.projCard{
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.text{
    position: absolute;
    color: white;
    z-index: 2;
    transition: all ease-in-out .2s;
    padding: 8rem 0px 0px 1.3rem;
}

.text>button{
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
}

.project-image{
    border-radius: 5px;
    box-shadow: 0 4px 6px 0 rgb(34 60 80 / 16%);
    transition: all ease-in-out .2s;
    justify-self: center;
    width: 100%;
    height: 100%;
}

.projCard:hover{
	filter: brightness(0.75);
	box-shadow: 0 8px 12px 0 rgba(34, 60, 80, .16);
}

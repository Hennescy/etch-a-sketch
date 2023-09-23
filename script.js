let container = document.getElementById('container');
let button = document.createElement('button');
button.innerHTML ='Select Grid';
document.body.appendChild(button);



button.addEventListener('click', function(){
    
    

    let x = prompt('Enter number of grids');

        container.replaceChildren();
        for (let i = 0; i < x; i++ )
        {
                let column = document.createElement('div');
                column.className='column';
                column.style.border ="thin solid";
                for(let j = 0; j < x; j++)
                {
                    let row = document.createElement('div');
                    row.className='row';
                    row.style.border ="thin solid";
                    
                    column.appendChild(row);
                }
                container.appendChild(column);
        }
const rowers = document.querySelectorAll('.row');
rowers.forEach(row => row.addEventListener("mouseenter", () => row.style.backgroundColor="black"));
} 


);









        




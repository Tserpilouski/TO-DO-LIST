//Zmienne:
let i = 0;
let j = 0;
let i_cliks = 0;
const main_cont = document.querySelector('#main-container')

//Funkcja pobrania id(btn)
function id_clicks(clicked){
    return i_cliks = clicked;
};

window.addEventListener('load', () => {
    //Przetwarzanie naciśnięcia przycisku 
    const btn_new_list = document.querySelector('#new_list');
    btn_new_list.addEventListener('click', add_new_list);


    function add_new_list(){
        i = i + 1;

        //Nowa lista z zadaniami
        const div_list = document.createElement('div');
        const div_list_btn =document.createElement('div');
        div_list.classList.add('new_list');
        div_list.setAttribute('id', `list_${i}`);
        div_list_btn.setAttribute('id', `list_btn_${i}`);
        main_cont.appendChild(div_list);
        div_list.after(btn_new_list);
        div_list.appendChild(div_list_btn);

        //Przycisk do dodanai tasków
        const btn_new_task = document.createElement('button');
        btn_new_task.innerHTML = '+ new task';
        btn_new_task.classList.add('btn_add_task', 'text');
        btn_new_task.setAttribute('id', `${i}`);
        btn_new_list.setAttribute('onclick', 'id_clicks(this.id)');
        div_list_btn.appendChild(btn_new_task);

        btn_new_task.addEventListener('click', () =>{
            j = j + 1;

            //Stworzenie taska
            const task = document.createElement('div');
            task.classList.add('new_task');
            task.setAttribute('id', `task_${j}`);
            div_list.appendChild(task);
            task.after(div_list_btn);

            //Dodanie przycisku do usuwania zadania
            const btn_del_task = document.createElement('button');
            btn_del_task.innerHTML = "X";
            btn_del_task.classList.add('btn_del_task');
            btn_del_task.setAttribute('id', `${j}`);
            btn_del_task.setAttribute('onclick', 'id_clicks(this.id)')
            task.appendChild(btn_del_task);

            btn_del_task.addEventListener('click', () => {
                const get_task_div = document.getElementById(`task_${i_cliks}`);
                get_task_div.remove();
            });

            //Dodanie nazwy zadania
            const name_task = document.createElement('input');
            name_task.classList.add('text_name_task');
            name_task.setAttribute('placeholder', 'Write task...');
            name_task.setAttribute('type', 'text');
            name_task.setAttribute('maxlength', '35');
            name_task.setAttribute('id', `${j}`);
            task.appendChild(name_task);


            //Dodanie textform (add comment)
            const text_task = document.createElement("TEXTAREA");
            text_task.classList.add('text_form');
            text_task.setAttribute('id', `${j}`);
            text_task.setAttribute('rows', '1');
            text_task.setAttribute('placeholder', 'write comment...');
            task.appendChild(text_task);

            text_task.addEventListener('input', autoResize, false);

            function autoResize() {
                this.style.height = 'auto';
                this.style.height = this.scrollHeight + 'px';
            }
        });

        //Przycisk usuwania listy
        const btn_delete_list = document.createElement('button');
        btn_delete_list.innerHTML = 'x delete list';
        btn_delete_list.classList.add('btn_del_list', 'text');
        btn_delete_list.setAttribute('id', `${i}`);
        btn_delete_list.setAttribute('onclick', 'id_clicks(this.id)');
        div_list_btn.appendChild(btn_delete_list);

        btn_delete_list.addEventListener('click', () => {
            const remove_list = document.getElementById(`list_${i_cliks}`);
            remove_list.remove();
        })
    }
});
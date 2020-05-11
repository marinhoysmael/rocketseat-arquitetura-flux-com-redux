/**
 * O arquivo de reduce tem somente uma única função;
 * O nome do reducer por padrão é o nome da variavel que será guardada no estado;
 * 
 * @param {*} state O primeiro parametro é o estado da variável no momento da execução do software;
 * @param {*} {action} O objeto retornado pela action
 */
export default function todos(state = [], action) {
    
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {
                id: Math.random(),
                text: action.text
            }];
        default:
            return state;
    }
}

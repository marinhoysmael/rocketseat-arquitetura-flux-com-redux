/**
 * As actions são funções.
 * Um arquvio pode ter varias actions
 */

 export function addTodo(text){
     /**
      * Toda action dispara uma ação com um type;
      * O type é uma constante que os reducers irão ouvir
      */
    return {
        type: 'ADD_TODO',
        text,
    };
 }
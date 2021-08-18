const convertToCamel=(...args)=>{   
    const updatedArgs=args.map((arg,index)=>{
        if(index===0) return arg.trim().toLowerCase();
        arg=arg.trim();
        return arg[0].toUpperCase()+arg.slice(1);
    })
    return updatedArgs.join('');
};

export const generateStateMapper=(side,position)=>{
    const accessKey=convertToCamel(side,position);    
    return (state)=>({
        displayText:state[accessKey]
    })
};





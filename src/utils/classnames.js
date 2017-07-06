const classnames = (classname,classSet)=>{
	let keys = Object.keys(classSet)
	let classSets = ''
	keys.forEach((item,i)=>{
		if(classSet[keys[i]]){
        classSets += i?' '+keys[i]:keys[i]
      }
	})
  return classname+classSets
}

export default classnames
var ${CLASSNAME};
${CLASSNAME} = function() {
   #if(${SUPERCLASS} != '')  
   this.constructor.apply(this, Array.prototype.slice.call(arguments, 0));
   #end
   
};

#if(${SUPERCLASS} != '')
${CLASSNAME}.prototype = new ${SUPERCLASS}();
#end
function lIterator(listElement,delay)
  { /* Constructor */ 
     for(var i=listElement.childNodes.length-1; i>=0; i--) 
	    if(!/li/i.test(listElement.childNodes[i].nodeName))
		    listElement.removeChild(listElement.childNodes[i]);
		    
		    this.id = lIterator.instances.length;
	lIterator.instances.push(this);
	
	setInterval('lIterator.instances['+this.id+'].showNext()',delay);
		     for(var i=1; i<listElement.childNodes.length; i++)
	    listElement.childNodes[i].style.display = 'none';
    /* Dynamic Methods */
    
    this.showNext = function()
	  { this.currentLI.style.display = 'none';
	    /* Following line is broken for readability */
		this.currentLI =
		    this.currentLI.nextSibling ?
                this.currentLI.nextSibling :
				this.currentLI.parentNode.firstChild;
        
		this.currentLI.style.display = 'block';
	  }
		  this.currentLI = listElement.firstChild;
  }
/* Static Properties */
lIterator.instances = new Array();
/* Static Methods */
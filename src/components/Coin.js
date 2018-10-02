import React from "react";

const Coin = props => (
    <div>
        <div className="coin__info">
	    {	
	 	    props.price && <p className="coin__key"> Price: 
	 	    	<span className="coin__value"> { props.price }</span>
	 	    </p> 
	    }
	    { 	
	 	    props.percentage && <p className="coin__key"> 24 Hour Change %: 
	 	    	<span className="coin__value"> { props.percentage }	</span>
	    	</p> 
	    }
	    { 	
	    	props.low && <p className="coin__key"> Day Low: 
	    		<span className="coin__value"> { props.low } </span>
	       	</p> 
	    }
	    { 	
	 	    props.high && <p className="coin__key"> Day High: 
	 	    	<span className="coin__value"> { props.high } </span>
	    </p> 
	    }
	    { 
	    	props.error && <p className="coin__error">{ props.error }</p>  
	    }
	    </div>
    </div>
);

export default Coin;
import './Attributes.css';

export const Attributes = () => {
  return (
    <form action="">
      <label className='block-label' htmlFor="strengh">
        Strengh: <input 
          type="number" 
          name="strengh-value" 
          id="strengh-value" />
        <input 
          type="number" 
          name="strengh-modifier" 
          id="strengh-modifier" />
      </label>
      
      <label className='block-label' htmlFor="dexterity">
        Dexterity: <input 
          type="number" 
          name="dexterity-value" 
          id="dexterity-value" />
        <input
          type="number"
          name="dexterity-modifier"
          id="dexterity-modifier"
        />
      </label>
      
      <label className='block-label' htmlFor="constitution">
        Constitution: <input
          type="number"
          name="constitution-value"
          id="constitution-value"
        />
        <input
          type="number"
          name="constitution-modifier"
          id="constitution-modifier"
        />
      </label>
      
      <label className='block-label' htmlFor="inteligence">
        Inteligence: <input 
          type="number"
          name="inteligence-value" 
          id="inteligence-value" />
        <input
          type="number"
          name="inteligence-modifier"
          id="inteligence-modifier"
        />
      </label>
      
      <label className='block-label' htmlFor="wisdom">
        Wisdom:  <input 
          type="number" 
          name="wisdom-value" 
          id="wisdom-value" />
        <input 
          type="number" 
          name="wisdom-modifier" 
          id="wisdom-modifier" />
      </label>
      
      <label className='block-label' htmlFor="charisma">
        Charisma: <input 
          type="number" 
          name="charisma-value" 
          id="charisma-value" />
        <input 
          type="number" 
          name="charisma-modifier" 
          id="charisma-modifier" />
      </label>
    </form>
  );
};

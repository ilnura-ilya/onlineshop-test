
import './App.css';
import Shop from './Shop';

function App() {
  return (
    <div className="Appitems">
    <Shop name="CC Cream" image="https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80" price = "$25" description = "CC, which stands for “color corrector” or “color correction” creams, first appeared on shelves not long after BB creams (more on the difference between the two in a bit), and they’re increasingly taking the place of foundation in makeup bags everywhere."/>
    <Shop name="Eye Palette" image="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" price = "$32.45" description = "This palette features nine neutral, beyond-creamy, super-blendable and super-blendable shades. These nudes can be mixed and matched—it’s a win no matter how you swipe."/>
    
    <Shop name="Lipstick" image="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" price = "$25.45" description = "A creamy lipstick formula with a soft, cushiony feel, medium-to-full buildable coverage, and a satin finish."/>
    <Shop name="Mascara" image="https://images.unsplash.com/photo-1619168213439-8af6b0fd5956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80" price = "$25.45" description = "A universal mascara with a unique eye-hugging brush to lift, lengthen, curl, and volumize every lash type for a lusher look."/>

    </div>

  );
}

export default App;

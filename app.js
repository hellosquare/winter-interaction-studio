/* Turtle: Winter Interactive Scene Project | student-facing winter interaction studio
   No complete Python solutions are generated. Progress is saved in this browser only. */
const KEYS = ['toggle','palette','stamp','reveal','move','depart','drag','hover'];
const STAGES = ['Experiment','Design','Build & debug'];
const SKILLS = {
  toggle:{num:'01',title:'Switch two colours',short:'One click. Two looks. A tree that changes.',category:'CLICK · BEGINNER',callout:'Click the pine tree',objective:'Make one winter object switch back and forth between two colours.',prediction:'What does the program need to remember after you click?',options:['Whether the object is in its first or second colour','How many trees are drawn on the screen','The current speed of the Turtle pen'],answer:0,observe:'Which part of the tree changed? What stayed the same?',structure:'Which idea would help the program choose between two colours?',structures:['IF / ELSE','A FOR LOOP','RANDOM ONLY'],structureAnswer:0,planStarter:'WHEN someone clicks the tree\nIF the tree is ________\n    ...\nOTHERWISE\n    ...',eventHint:'a click on or near an object',conditionHint:'which colour or state it currently has',actionHint:'redraw or change the tree, then update its state',build:['Keep track of which colour is currently displayed.','Make a click call a function.','Test two clicks: first changes it, second restores it.'],hint1:'A Boolean variable can store two states, such as True / False. Use IF and ELSE to decide the next colour.',hint2:'A screen click calls a handler with two values: x and y. If only the tree should respond, also check whether the click is near its coordinates.',hint3:'is_gold = False  # remembers the last click\n\ndef change_tree(x, y):\n    global is_gold\n    if ________:  # Is the click near the tree?\n        if is_gold:\n            # TODO: choose green\n        else:\n            # TODO: choose gold\n        is_gold = not is_gold\n        # TODO: redraw the tree\n\nscreen.onclick(________)  # register the handler',caution:'Changing fillcolor() alone does not recolour shapes you already drew. Redraw the object, ideally using a separate Turtle pen.',quiz:'Which function shape works with screen.onclick()?',quizOptions:['def change_tree(x, y):','def change_tree():','def change_tree(colour, size, speed):'],quizAnswer:0,reflect:'How did you stop your colour-changing code from affecting the whole scene?'
  },
  palette:{num:'02',title:'Cycle a colour palette',short:'A present with four possible colours.',category:'CLICK · BEGINNER',callout:'Click the wrapped gift',objective:'Let a visitor cycle through several colours using repeated clicks.',prediction:'What is a sensible way to store several colours?',options:['One list of colour codes','A separate Python file for every colour','A new Turtle screen for each click'],answer:0,observe:'How many colours did you see before the sequence repeated?',structure:'Which structure helps choose the next colour?',structures:['LIST + INDEX','ONLY PRINT()','A WHILE TRUE LOOP'],structureAnswer:0,planStarter:'STORE colours in a ________\nWHEN visitor clicks the gift\n    MOVE to the next colour\n    IF at the end, ________',eventHint:'click the gift',conditionHint:'whether the index has reached the end of the colour list',actionHint:'advance the index and redraw the box',build:['Create your own list of 3–5 hex colours.','Track which colour the object currently uses.','Make clicks move through the list and return to the start.'],hint1:'Use a list of hex-code strings and a number called an index. The index points to one colour.',hint2:'You already know list indexing: colours[index]. The modulo operator (%) can wrap a number back to 0.',hint3:'colours = ["#______", "#______", "#______"]\ncolour_index = 0\n\ndef next_colour(x, y):\n    global colour_index\n    colour_index = ________\n    chosen_colour = colours[________]\n    # TODO: draw your object in chosen_colour\n\nscreen.onclick(________)',caution:'Keep the list and colour index outside the click handler. Otherwise, the index may reset every time you click.',quiz:'Which idea helps a colour index wrap around to the start?',quizOptions:['Modulo (%)','pen.speed(10)','turtle.done()'],quizAnswer:0,reflect:'Why did you choose your colour order?'
  },
  stamp:{num:'03',title:'Add snow or footprints',short:'Put a new mark exactly where you click.',category:'CLICK · BEGINNER',callout:'Choose a stamp, then click the sky',objective:'Add an object at the visitor’s clicked coordinates.',prediction:'What information lets a snowflake appear where you clicked?',options:['The click’s x and y coordinates','The window title','The number of lines in your file'],answer:0,observe:'Does each new mark appear in the same place or at a different position?',structure:'Which structure controls a repeated action?',structures:['EVENT + COORDINATES','ONLY IF / ELSE','AN EMPTY LIST'],structureAnswer:0,planStarter:'WHEN the visitor clicks (x, y)\nMOVE the effects pen to ________\nDRAW a ________ at that position',eventHint:'a click anywhere in the allowed drawing area',conditionHint:'optional: only allow snow above the hill',actionHint:'go to the clicked coordinates and draw a shape',build:['Make a new Turtle for effects or use your existing pen.','Read the click coordinates in a function.','Add at least three marks in different places.'],hint1:'screen.onclick(...) gives your function two arguments: x and y. Your function can use those coordinates directly.',hint2:'To draw a small filled circle without constructing a polygon, think about pen.dot(size, colour). To restrict snow to the sky, test y with IF.',hint3:'def add_mark(x, y):\n    effects_pen.penup()\n    effects_pen.goto(________)\n    # TODO: draw one small winter object\n\nscreen.onclick(________)',caution:'screen.onclick() receives mouse clicks across the Turtle screen. Keep your original background on a different pen if you want to clear only new marks.',quiz:'What values are passed into a screen click handler?',quizOptions:['x and y','width and height','speed and colour'],quizAnswer:0,reflect:'Where could adding footprints or snow make sense in your scene?'
  },
  reveal:{num:'04',title:'Reveal a surprise',short:'Open a gift. Discover what was hidden.',category:'CLICK · DEVELOPING',callout:'Click the gift to open and close it',objective:'Reveal or hide a winter surprise when the visitor clicks.',prediction:'What should your program track to know whether the gift is open?',options:['A true/false open state','The line thickness of the pen','Only the screen background colour'],answer:0,observe:'Which details appear only after the gift opens?',structure:'Which idea makes an item appear only in one state?',structures:['IF / ELSE + BOOLEAN','REPEAT FOREVER','A COLOUR PICKER'],structureAnswer:0,planStarter:'SET open to ________\nWHEN the visitor clicks the gift\n    IF open is FALSE\n        ________\n    ELSE\n        ________',eventHint:'a click inside the gift area',conditionHint:'gift_is_open is true or false',actionHint:'draw the surprise or cover/hide it',build:['Choose a surprise that uses shapes you already know.','Plan what the scene looks like in both states.','Test opening and closing the gift.'],hint1:'A Boolean can remember whether your present is open. Use IF / ELSE to choose what to display.',hint2:'If you draw the surprise with a different Turtle pen, you can clear it without erasing your gift or background.',hint3:'gift_open = False\n\ndef reveal(x, y):\n    global gift_open\n    if ________:  # Click is inside gift\n        if gift_open:\n            # TODO: hide surprise\n        else:\n            # TODO: draw surprise\n        gift_open = not gift_open\n\nscreen.onclick(________)',caution:'If you use pen.clear(), only that pen’s drawings disappear. Put interactive drawings on a separate Turtle when possible.',quiz:'Which value is suitable for a two-state variable?',quizOptions:['True / False','pen.forward(20)','A turtle.Screen() object'],quizAnswer:0,reflect:'What would make the surprise understandable to a younger visitor?'
  },
  move:{num:'05',title:'Click to move an object',short:'Shift a sleigh sideways, then bring it back.',category:'MOVEMENT · DEVELOPING',callout:'Click the sleigh to move it',objective:'Move an object when clicked without redrawing the entire background.',prediction:'Which coordinate changes when an object moves left or right?',options:['The x-coordinate','Only the y-coordinate','The hex colour code'],answer:0,observe:'What stays in place when the sleigh moves?',structure:'Which approach helps track two possible positions?',structures:['STATE + COORDINATES','A COLOUR LIST ONLY','PRINT()'],structureAnswer:0,planStarter:'SET the sleigh to its START position\nWHEN clicked\n    IF it is at START\n        MOVE ________\n    ELSE\n        MOVE ________',eventHint:'a click on the sleigh or a screen control',conditionHint:'the current position or a moved state',actionHint:'change the x position, or clear and redraw the sleigh at another x',build:['Store a starting position and another position.','Give your sleigh its own drawing function or visible Turtle.','Test moving forward and returning.'],hint1:'Moving across the screen changes x. Move to x + a distance, or choose an exact second coordinate.',hint2:'Two approaches: (1) make a visible Turtle shape and call setx(); (2) clear the sleigh’s pen and redraw the object at the new coordinates.',hint3:'start_x = ________\nnext_x = ________\nmoved = False\n\ndef move_sleigh(x, y):\n    global moved\n    if moved:\n        # TODO: use start_x\n    else:\n        # TODO: use next_x\n    moved = not moved\n\nscreen.onclick(________)',caution:'If your sleigh is a drawing made by one pen, moving that pen alone will NOT move previously drawn lines. Clear and redraw, or use an actual visible Turtle shape.',quiz:'Which Turtle method changes only the current x-coordinate?',quizOptions:['setx()','setheading()','fillcolor()'],quizAnswer:0,reflect:'What other objects in your winter scene could move in response to a click?'
  },
  depart:{num:'06',title:'Leave the screen & return',short:'A sleigh flies out of frame—and comes back.',category:'MOVEMENT · DEVELOPING',callout:'Click the sky to send the sleigh away; click again to return',objective:'Send a winter object beyond the edge, then make it reappear on the next click.',prediction:'Once the sleigh is off-screen, what should receive the next click?',options:['The screen itself','The invisible sleigh only','The original pen colour'],answer:0,observe:'Where does the sleigh go? What happens on the second click?',structure:'Which idea helps a visitor alternate between away and back?',structures:['BOOLEAN STATE + IF / ELSE','ONE FOR LOOP ONLY','RANDOM NUMBERS ONLY'],structureAnswer:0,planStarter:'SET sleigh_away to FALSE\nWHEN the screen is clicked\n    IF sleigh_away is FALSE\n        MOVE until ________\n    ELSE\n        BRING sleigh ________',eventHint:'a screen click that still works when the sleigh is invisible',conditionHint:'whether the sleigh is away or home',actionHint:'move it beyond the edge, then restore or re-enter',build:['Find where your screen edge is in Turtle coordinates.','Use a state variable to alternate away and home.','Test that the second click still works after it leaves.'],hint1:'On a 900 × 600 Turtle screen, the visible x-range is approximately −450 to +450. To fully leave, the object may need to move beyond that boundary.',hint2:'Use screen.onclick(...) rather than relying only on clicking the moving object. For smooth animation, screen.ontimer(...) can schedule another movement step.',hint3:'sleigh_away = False\n\ndef on_screen_click(x, y):\n    global sleigh_away\n    if not sleigh_away:\n        # TODO: move sleigh beyond right edge\n    else:\n        # TODO: restore its starting position\n    sleigh_away = not sleigh_away\n\nscreen.onclick(________)',caution:'A long blocking while loop may freeze mouse input. To animate smoothly, move in small scheduled steps with ontimer(), or begin with an instant position change.',quiz:'What click handler can still respond after the sleigh disappears?',quizOptions:['screen.onclick()','Only sleigh.onclick()','pen.fillcolor()'],quizAnswer:0,reflect:'Would your object return instantly or animate back? Why is that appropriate for your audience?'
  },
  drag:{num:'07',title:'Drag an ornament',short:'Pick up a star and place it on a tree.',category:'MOVEMENT · ADVANCED',callout:'Drag the gold star to the tree',objective:'Allow the visitor to move an object by holding and dragging.',prediction:'What kind of Turtle works best for real dragging?',options:['A visible Turtle shape with its own events','An old filled drawing that is already on the canvas','Only the screen background'],answer:0,observe:'What happens when you drop the star near the tree?',structure:'Which event fits moving an object with the pointer?',structures:['ONDRAG + X/Y','SCREEN TITLE','PEN COLOUR ONLY'],structureAnswer:0,planStarter:'CREATE a movable star object\nWHEN the visitor DRAGS the star\n    MOVE the star to ________\nWHEN released near the tree\n    ________',eventHint:'dragging a visible Turtle shape',conditionHint:'optional: whether the star was released in the tree area',actionHint:'move the star to pointer coordinates, then check drop area',build:['Create a visible Turtle with a recognizable shape.','Connect its drag handler to x and y.','Try dragging and releasing it near a target.'],hint1:'Standard Turtle dragging works best with a visible Turtle object, not with an arbitrary filled polygon drawn by a hidden pen.',hint2:'Look up turtle.ondrag(function). The drag handler receives x and y. Inside it, goto(x, y) can move the Turtle.',hint3:'star = turtle.Turtle()\nstar.shape("circle")  # Try a custom shape later\n\ndef drag_star(x, y):\n    # TODO: move star to current pointer location\n\nstar.ondrag(________)',caution:'Dragging a drawn rectangle or triangle is not the same as dragging a Turtle object. Do not start by trying to drag old lines on the canvas.',quiz:'What can receive an ondrag() event directly?',quizOptions:['A visible Turtle object','Any filled drawing made by a hidden pen','The fill colour string'],quizAnswer:0,reflect:'How could you make the drag task easier for a Grade 2–3 visitor?'
  },
  hover:{num:'08',title:'Hover to discover',short:'Move the pointer to uncover a secret.',category:'MOVEMENT · ADVANCED',callout:'Hover over the snowman (tap on touchscreens)',objective:'Reveal a hidden detail when the mouse moves over an object.',prediction:'Does standard Python Turtle have a simple built-in screen.onhover() method?',options:['No—hover needs extra event handling','Yes—it works just like screen.onclick()','Yes—pen.hover() is built in'],answer:0,observe:'What happens to the secret message as you enter and leave the snowman area?',structure:'What input must an advanced hover program track?',structures:['MOUSE POSITION + HIT AREA','ONLY HEX COLOURS','THE PYTHON FILE NAME'],structureAnswer:0,planStarter:'WHEN the pointer MOVES\nIF pointer is inside snowman area\n    ________\nOTHERWISE\n    ________',eventHint:'mouse movement across a region',conditionHint:'pointer position inside or outside the object area',actionHint:'show or hide a clue',build:['Write down the approximate object boundaries.','Decide what appears when the pointer enters the area.','Consider building a click version first as a reliable alternative.'],hint1:'Unlike clicking, hover has no simple built-in Turtle screen.onhover(). It is an advanced extension involving the underlying Tkinter canvas.',hint2:'The Tkinter canvas can listen for mouse motion, but its coordinate system differs from Turtle coordinates. Position conversion and hit-testing are necessary.',hint3:'# Advanced extension idea (not a finished solution):\ncanvas = screen.getcanvas()\n# TODO: bind a mouse-motion event to a handler\n# TODO: convert canvas coordinates to Turtle coordinates\n# TODO: test whether pointer is inside the object\n\n# Simpler fallback: use screen.onclick(...)',caution:'This is the hardest option in desktop Turtle. Touchscreens do not have true hover. A click-to-reveal alternative is recommended for the Grade 2–3 showcase.',quiz:'What is the simplest reliable alternative to hover in standard Turtle?',quizOptions:['Click and check coordinates','pen.hideturtle()','Changing pen.speed()'],quizAnswer:0,reflect:'Is hover worth the extra complexity for your visitor, or would clicking be more accessible?'
  }
};
const HELP = {
  toggle:{
    methods:[['screen.onclick(change_tree)','Register a function to run whenever the screen is clicked.'],['def change_tree(x, y):','The click handler receives the clicked x and y coordinates automatically.'],['tree_pen.clear()','Erase only this pen\'s previous tree drawing before redrawing.'],['screen.update()','Refresh the scene if you previously used screen.tracer(0).']],
    miniTitle:'Try state with a light switch (not a tree)',
    mini:'light_on = False\n\ndef flip_switch():\n    global light_on\n    light_on = not light_on\n    print(light_on)',
    state:'The variable starts outside the function so it remembers the last click. global tells Python you intend to CHANGE that outside variable from inside the function. Your tree needs a similar memory, plus a way to redraw its leaves.',
    extra:'A click anywhere will call the handler. Check a rectangle around your tree with x and y before changing anything. pen.fillcolor() changes future drawing; it cannot recolour an already finished shape by itself.'
  },
  palette:{
    methods:[['screen.onclick(next_colour)','Run your function on every click. It must accept x and y.'],['pen.fillcolor(colour)','Choose the fill for the NEXT time you draw the object.'],['gift_pen.clear()','Erase an old gift before drawing its new colour.'],['screen.update()','Show the redrawn gift when tracer(0) is on.']],
    miniTitle:'Practice using an index with a snack list',
    mini:'snacks = ["apple", "banana", "pear"]\nindex = 0\nindex = (index + 1) % len(snacks)\nprint(snacks[index])',
    state:'The colour index must survive between clicks, so define it outside the handler. If the handler reassigns it, you will normally need global colour_index inside that function. Try printing the index before drawing anything.',
    extra:'List positions start at zero. Use (index + 1) % len(colours) to wrap from the last item to the first. Selecting a new colour is not the same thing as redrawing the gift.'
  },
  stamp:{
    methods:[['screen.onclick(add_mark)','Listen for a click anywhere on the screen.'],['def add_mark(x, y):','Accept the click coordinates (two parameters).'],['effects_pen.goto(x, y)','Move the effects pen to the point clicked.'],['effects_pen.dot(12, "white")','Make a simple test mark before attempting a snowflake.']],
    miniTitle:'First test: print a click location',
    mini:'def report_click(x, y):\n    print("Clicked:", round(x), round(y))\n\nscreen.onclick(report_click)',
    state:'You do not need global here if each click simply adds a new snowflake. Add a variable only if the program needs to remember something, such as how many snowflakes have been placed.',
    extra:'Test with a dot first. When that works, replace the dot with your own draw_snowflake(x, y) function. Use a separate effects_pen so its clear() does not erase the hills.'
  },
  reveal:{
    methods:[['screen.onclick(open_gift)','Call an event handler when the visitor clicks.'],['surprise_pen.clear()','Hide the drawing made by the surprise pen.'],['draw_surprise(x, y)','Call a function YOU create for the hidden object.'],['screen.update()','Update the view after changing the drawing when tracer(0) is used.']],
    miniTitle:'Try the idea of a remembered open / closed state',
    mini:'door_open = False\n\ndef flip_door():\n    global door_open\n    door_open = not door_open\n    print("Open?", door_open)',
    state:'Without a remembered state, each click would repeat the same action. global is needed here only because the function reassigns door_open. Use a different name for the state of your gift.',
    extra:'Keep your gift drawing separate from the surprise drawing. A separate surprise_pen makes it easier to erase the hidden object while keeping the rest of the scene.'
  },
  move:{
    methods:[['screen.onclick(move_object)','Register a click handler; check its x and y if only the object should respond.'],['visible_turtle.goto(x, y)','Move a visible Turtle SHAPE to a new location.'],['visible_turtle.setx(x)','Move only the visible Turtle\'s x position.'],['object_pen.clear()','For an object built from lines, erase its previous drawing, then redraw it.']],
    miniTitle:'Try moving a cursor instead of a drawn house',
    mini:'marker = turtle.Turtle()\nmarker.penup()\nmarker.shape("circle")\nmarker.setx(120)',
    state:'To alternate between two positions, you must remember whether the object has moved. A Boolean can store that state. If you reassign that Boolean inside your click handler, global tells Python which variable you mean.',
    extra:'Very important: setx() and goto() move the Turtle cursor, NOT lines and polygons it has already drawn. For your existing winter objects, use a separate object_pen, clear it, then call your object-drawing function with new coordinates.'
  },
  depart:{
    methods:[['screen.onclick(send_or_return)','The second click still works after the sleigh leaves the frame.'],['object_pen.clear()','Erase the previous sleigh drawing before redrawing it off-screen or at home.'],['screen.ontimer(next_step, 40)','Optional: schedule one movement step after 40 milliseconds.'],['screen.update()','Show each new animation frame when tracer(0) is used.']],
    miniTitle:'Check which side of the screen is outside',
    mini:'screen.setup(900, 600)\n# Approximate visible x-range: -450 to +450\n# A wide object may need its anchor beyond +450',
    state:'Use an away/home variable to decide what the NEXT click should do. If the handler changes that variable, explain global first. If you want animation, schedule short steps with ontimer() rather than a long blocking loop.',
    extra:'If the sleigh is off-screen, clicking the sleigh itself will not work. Keep the click attached to the SCREEN. Start with an instant departure/return; animate it only after the two states work.'
  },
  drag:{
    methods:[['star.ondrag(drag_star)','Register movement while a visible Turtle shape is being dragged.'],['def drag_star(x, y):','The drag handler receives the current pointer coordinates.'],['star.goto(x, y)','Move the visible Turtle itself.'],['star.onrelease(drop_star)','Optional: check the final location when the mouse is released.']],
    miniTitle:'Experiment with a draggable Turtle shape',
    mini:'marker = turtle.Turtle()\nmarker.penup()\nmarker.shape("circle")\nmarker.ondrag(marker.goto)',
    state:'A simple draggable Turtle does not require global. You only need stored state if you want to remember whether the ornament has been placed, count successful drops, or prevent further dragging.',
    extra:'An existing polygon DRAWN by a hidden pen is not itself draggable. Use a visible Turtle shape. If dragging is too difficult for your project timeline, start with click-to-place instead.'
  },
  hover:{
    methods:[['screen.onclick(reveal_clue)','Recommended fallback: reveal a clue when clicked.'],['screen.getcanvas()','Advanced: access the underlying Tkinter drawing canvas.'],['canvas.bind("<Motion>", function)','Advanced Tkinter mouse-motion event, not a standard Turtle shortcut.'],['clue_pen.clear()','Hide a clue by clearing only its own pen.']],
    miniTitle:'Build the simpler click version first',
    mini:'def reveal_clue(x, y):\n    print("Test the clue area:", x, y)\n\nscreen.onclick(reveal_clue)',
    state:'Hover needs the program to compare the mouse position with an object boundary repeatedly. Standard Turtle has no screen.onhover(). A click-to-reveal version is much more achievable and works better for younger visitors.',
    extra:'Tkinter canvas coordinates are NOT the same as Turtle coordinates, so hover needs extra conversion and careful testing. If you choose this advanced option, start with the click version and ask for teacher support.'
  }
};
const HINT_TITLES = ['THINK IT THROUGH','METHODS TO CONSIDER','A SMALL PYTHON EXAMPLE','STATE & DEBUGGING','UNFINISHED STARTER'];
const hintLabel = n => ['thinking clue','useful Turtle methods','a small Python example','state and debugging','unfinished starter'][n-1];
const STORAGE = 'frost-frame-studio-v2';
const makeFresh=()=>({complete:{},answers:{},last:'toggle'});
let state=makeFresh();
try{const saved=JSON.parse(localStorage.getItem(STORAGE)||'null');if(saved&&saved.complete&&saved.answers)state={...state,...saved};}catch(_e){}
let live={};
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const record=id=>state.answers[id]||(state.answers[id]={prediction:null,observe:'',structure:null,event:'',condition:'',action:'',pseudo:'',quiz:null,reflection:'',checks:[false,false,false]});
const done=(id,step)=>Boolean(state.complete[id]?.[step-1]);
const numDone=()=>KEYS.reduce((sum,id)=>sum+[1,2,3].filter(n=>done(id,n)).length,0);
const save=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(_e){};updateHeader()};
const updateHeader=()=>{const el=$('#header-progress');if(el)el.textContent=`${numDone()} lessons completed`};
const skillProgress=id=>[1,2,3].filter(n=>done(id,n)).length;
const allowed=(id,step)=>step===1||done(id,step-1);
const route=()=>{let h=decodeURIComponent(location.hash.replace(/^#/,''));if(!h||h==='home')return {home:true};let [id,s]=h.split('/');if(!SKILLS[id])return{home:true};const step=Math.min(3,Math.max(1,Number(s)||1));return{id,step:allowed(id,step)?step:1}};
const link=(id,step=1)=>`#${id}/${step}`;
const sparkle=(x,y,r=8,c='#fff8ce')=>`<path d="M${x} ${y-r} L${x+r*.25} ${y-r*.25} L${x+r} ${y} L${x+r*.25} ${y+r*.25} L${x} ${y+r} L${x-r*.25} ${y+r*.25} L${x-r} ${y} L${x-r*.25} ${y-r*.25} Z" fill="${c}"/>`;
function treeSvg(x=250,y=230,s=1,interactive=false){return `<g transform="translate(${x} ${y}) scale(${s})" ${interactive?'data-action="toggle" tabindex="0" role="button" aria-label="Change the tree colour"':''} ><rect x="-13" y="-47" width="26" height="59" rx="3" fill="#78523e"/><path class="js-leaves" d="M0 -164 L-65 -64 L-43 -64 L-89 -5 H89 L43 -64 H65Z" fill="#2f856b" stroke="#205f51" stroke-width="3" stroke-linejoin="round"/><path class="js-leaves" d="M0 -208 L-57 -104 H57Z" fill="#3b9b79" stroke="#205f51" stroke-width="3" stroke-linejoin="round"/><path d="M0 -194 L-42 -114" stroke="#c6e0ca" stroke-opacity=".22" stroke-width="7"/><rect x="-83" y="-211" width="166" height="223" fill="transparent"/></g>`}
function presentSvg(x=250,y=230,s=1,interactive=false){return `<g transform="translate(${x} ${y}) scale(${s})" ${interactive?'data-action="gift" tabindex="0" role="button" aria-label="Click the wrapped gift"':''}><ellipse cx="0" cy="5" rx="96" ry="12" fill="#071f27" opacity=".19"/><rect class="js-wrap" x="-77" y="-111" width="154" height="111" rx="8" fill="#c74b50" stroke="#862f3d" stroke-width="3"/><rect x="-13" y="-111" width="26" height="111" fill="#f8d17c"/><rect x="-77" y="-66" width="154" height="25" fill="#f8d17c"/><path d="M0 -111 C-10 -139 -47 -144 -39 -119 C-37 -105 -14 -107 0 -111 C13 -142 46 -141 41 -121 C39 -106 16 -109 0 -111" fill="none" stroke="#f8d17c" stroke-width="13" stroke-linecap="round"/><rect x="-80" y="-144" width="160" height="150" fill="transparent"/></g>`}
function sleighSvg(x=205,y=200,s=1,clickable=false){return `<g id="demo-sleigh" transform="translate(${x} ${y}) scale(${s})" ${clickable?'data-action="sleigh" tabindex="0" role="button" aria-label="Move the sleigh"':''}><path d="M-87 23 Q-65 43 50 40 Q93 40 95 9" fill="none" stroke="#f2c783" stroke-width="10" stroke-linecap="round"/><path d="M-76 -62 L74 -62 L57 17 Q-12 39 -76 16 Z" fill="#b83f46" stroke="#8a2831" stroke-width="3"/><path d="M-76 -57 L-76 -112 L-54 -112 L-54 -57" fill="#e2685b" stroke="#8a2831" stroke-width="3"/><rect x="-31" y="-100" width="51" height="38" rx="3" fill="#2d9a85"/><rect x="-9" y="-100" width="9" height="38" fill="#f7d786"/><rect x="30" y="-93" width="35" height="31" rx="3" fill="#e5b966"/><rect x="43" y="-93" width="8" height="31" fill="#b94345"/><rect x="-91" y="-112" width="197" height="163" fill="transparent"/></g>`}
function snowmanSvg(x=260,y=240,interactive=false){return `<g transform="translate(${x} ${y})" ${interactive?'data-action="hover" tabindex="0" role="button" aria-label="Reveal the snowman secret"':''}><ellipse cy="13" rx="72" ry="13" fill="#0f2f40" opacity=".2"/><circle cx="0" cy="-34" r="51" fill="#eff9fb" stroke="#c6e1e9" stroke-width="3"/><circle cx="0" cy="-101" r="40" fill="#eff9fb" stroke="#c6e1e9" stroke-width="3"/><circle cx="0" cy="-153" r="29" fill="#eff9fb" stroke="#c6e1e9" stroke-width="3"/><path d="M-33 -124 H33 L26 -136 H-24Z" fill="#b94345"/><circle cx="-10" cy="-156" r="4" fill="#293e44"/><circle cx="11" cy="-156" r="4" fill="#293e44"/><path d="M1 -149 L27 -142 L2 -141Z" fill="#ec9a50"/><path d="M-37 -97 L-80 -129 M37 -97 L80 -129" fill="none" stroke="#956b50" stroke-width="6" stroke-linecap="round"/><circle cx="0" cy="-108" r="5" fill="#243e47"/><circle cx="0" cy="-90" r="5" fill="#243e47"/><circle cx="0" cy="-47" r="6" fill="#243e47"/><rect x="-40" y="-191" width="80" height="206" fill="transparent"/></g>`}
function landscape(){return `<defs><linearGradient id="night" x1="0" y1="0" x2="0.1" y2="1"><stop offset="0" stop-color="#11293c"/><stop offset="1" stop-color="#25516a"/></linearGradient></defs><rect width="520" height="330" fill="url(#night)"/><circle cx="426" cy="67" r="28" fill="#ffedc1"/><circle cx="426" cy="67" r="40" fill="#ffedc1" opacity=".07"/>${[[57,44,5],[118,83,6],[212,55,4],[300,85,6],[362,32,5],[468,132,5],[89,161,3]].map(([x,y,r])=>sparkle(x,y,r,'#d4eced')).join('')}<path d="M0 241 Q73 199 145 221 T300 224 T520 211 L520 330 H0Z" fill="#afcdd6"/><path d="M0 282 Q120 244 230 263 T520 253 V330 H0Z" fill="#f5faf8"/><path d="M0 305 Q100 280 220 292 T520 290 V330 H0Z" fill="#e1f1ee"/>`}
function demoStateFor(id){return live[id]||(live[id]={count:0,gold:false,idx:0,marks:[],stampType:'snow',open:false,moved:false,away:false,animating:false,starX:110,starY:145,dragged:false,hover:false})}
function demoSvg(id){const d=demoStateFor(id);let objects='';if(id==='toggle'){objects=treeSvg(254,276,1.04,true)+`<rect x="37" y="249" width="115" height="20" rx="10" fill="#e3f0ea" opacity=".55"/>`;}
else if(id==='palette'){objects=presentSvg(255,275,1.1,true)}
else if(id==='stamp'){objects=treeSvg(420,266,.55,false)+d.marks.map(m=>m.type==='snow'?sparkle(m.x,m.y,10,'#f7fbff'):`<g fill="#32556c" opacity=".8"><ellipse cx="${m.x-8}" cy="${m.y-4}" rx="5" ry="11" transform="rotate(-25 ${m.x-8} ${m.y-4})"/><ellipse cx="${m.x+8}" cy="${m.y+7}" rx="5" ry="11" transform="rotate(25 ${m.x+8} ${m.y+7})"/></g>`).join('')}
else if(id==='reveal'){objects=presentSvg(252,278,1,true)+`<g id="surprise" style="display:${d.open?'block':'none'}"><rect x="155" y="38" rx="19" width="218" height="79" fill="#fffdf1" stroke="#eac98f" stroke-width="4"/><path d="M215 117 L236 148 L248 117" fill="#fffdf1"/>${sparkle(190,72,13,'#e5b966')}<text x="268" y="67" text-anchor="middle" font-family="Arial" font-weight="800" font-size="20" fill="#255748">SURPRISE!</text><text x="268" y="93" text-anchor="middle" font-family="Arial" font-size="15" fill="#a04746">You found a star.</text></g>`}
else if(id==='move'){objects=sleighSvg(d.moved?325:188,255,.78,true)}
else if(id==='depart'){objects=sleighSvg(d.away?665:166,240,.83,false)+`<text x="24" y="315" fill="#4c727e" font-size="12">CLICK ANYWHERE TO TOGGLE</text>`}
else if(id==='drag'){objects=treeSvg(380,286,.86,false)+`<rect x="38" y="78" width="142" height="135" rx="16" fill="#ffffff" opacity=".13" stroke="#ffffff" stroke-opacity=".45" stroke-dasharray="6,5"/><text x="108" y="205" fill="#fef4da" font-size="13" font-family="Arial" font-weight="700" text-anchor="middle">DRAG ME</text><g id="drag-star" data-action="drag-star" role="button" aria-label="Drag the star onto the tree" tabindex="0" transform="translate(${d.starX} ${d.starY})"><polygon points="0,-37 9,-12 36,-12 15,5 24,33 0,16 -24,33 -15,5 -36,-12 -9,-12" fill="#f4ce79" stroke="#ffebaf" stroke-width="3"/><circle r="46" fill="transparent"/></g>${d.dragged?`<text x="261" y="52" fill="#f9e4ad" font-size="19" font-family="Arial" font-weight="700">Nice placement!</text>`:''}`}
else if(id==='hover'){objects=snowmanSvg(246,278,true)+`<g id="hover-bubble" style="display:${d.hover?'block':'none'}"><rect x="290" y="42" rx="17" width="206" height="78" fill="#fffdf2"/><path d="M309 112 L287 146 L326 117" fill="#fffdf2"/><text x="393" y="72" fill="#215644" font-size="18" font-family="Arial" font-weight="800" text-anchor="middle">Psst...</text><text x="393" y="97" fill="#ab3f42" font-size="15" font-family="Arial" text-anchor="middle">I love hot cocoa!</text></g>`}
return `<svg id="demo-svg" viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" aria-label="Interactive demonstration: ${esc(SKILLS[id].title)}" role="img">${landscape()}${objects}<rect x="0" y="0" width="520" height="330" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="7"/></svg>`;
}
function heroVisual(){return `<svg viewBox="0 0 520 330" role="img" aria-label="Illustrated winter scene with a moon, tree, a gift, and snowfall">${landscape()}${treeSvg(150,275,.91,false)}${presentSvg(348,283,.55,false)}${sparkle(315,138,17,'#f7d17b')}${sparkle(440,151,9,'#e9f6f0')}<g transform="translate(28 29)"><rect width="118" height="33" rx="9" fill="#fffef7" opacity=".9"/><text x="59" y="22" text-anchor="middle" fill="#2c6653" font-family="Arial" font-size="13" font-weight="700">CLICK TO PLAY</text></g></svg>`}
function thumb(id){let obj='';switch(id){case 'toggle':obj=treeSvg(260,216,.65,false);break;case 'palette':obj=presentSvg(250,221,.68,false);break;case 'stamp':obj=[sparkle(200,95,14),sparkle(290,125,10),sparkle(345,77,13)].join('')+treeSvg(85,234,.53,false);break;case 'reveal':obj=presentSvg(240,225,.65,false)+sparkle(358,58,25,'#f3d07b');break;case 'move':obj=sleighSvg(230,203,.65,false);break;case 'depart':obj=sleighSvg(365,208,.6,false)+`<path d="M82 166H192" stroke="#d8eadf" stroke-width="5" stroke-dasharray="10 10"/>`;break;case 'drag':obj=treeSvg(315,238,.6,false)+sparkle(115,95,30,'#f8d381');break;case 'hover':obj=snowmanSvg(235,248,false);break;}
return `<svg viewBox="0 0 520 240" role="img" aria-label="Illustration of ${esc(SKILLS[id].title)}"><rect width="520" height="240" fill="#173d40"/>${[sparkle(45,52,8),sparkle(422,54,6),sparkle(375,104,5)].join('')}<path d="M0 191 Q160 140 330 191 T520 179 V240 H0Z" fill="#cbded9"/><path d="M0 224 Q210 193 520 216 V240 H0Z" fill="#eff7f0"/>${obj}</svg>`;
}
function renderHome(){const completed=numDone();const current=skillProgress(state.last||'toggle');return `<section class="home-hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>Make your winter scene <em>do something.</em></h1><p>Start by playing, predicting, and making a plan. Then turn one of the ideas into your own Python Turtle feature.</p><div class="hero-actions"><a href="${link(state.last||'toggle',Math.min(3,skillProgress(state.last||'toggle')+1))}" class="primary">${completed?'Continue a lesson':'Explore the lessons'} <span aria-hidden="true">→</span></a><span class="hero-meta">8 interactions · 3 mini lessons each</span></div></div><div class="hero-art">${heroVisual()}<div class="floating-label">DRAW IT → THINK IT → CODE IT</div></div></div></section><section class="main-section wrap"><div class="section-top"><div><div class="section-kicker">THE INTERACTION LIBRARY</div><h2>Choose what your scene will do.</h2><p>Every skill is a short learning path. You can explore as many as you like, but build at least one that fits your winter scene.</p></div><div class="path-progress"><div class="progress-row"><span>YOUR CURRENT PATH</span><span>${current}/3 lessons</span></div><div class="progress-track"><div class="progress-fill" style="width:${current/3*100}%"></div></div></div></div><div class="lesson-grid">${KEYS.map(id=>{const s=SKILLS[id],p=skillProgress(id);return `<a class="skill-card" href="${link(id,Math.min(3,p+1))}"><div class="card-art">${thumb(id)}<span class="card-number">${s.num}</span></div><div class="skill-card-content"><h3 class="skill-title">${s.title}</h3><p class="skill-desc">${s.short}</p><div class="card-bottom"><span>${p}/3 lessons complete</span><b>${p===3?'Review ↗':p?'Continue ↗':'Start ↗'}</b></div></div></a>`}).join('')}</div><div class="how-section"><div><div class="section-kicker">THINK LIKE A PROGRAMMER</div><h3>Three lessons. One original interaction.</h3><p>The website won't check your Python or give you a finished answer. It helps you build the logic, then asks you to test the real feature in VS Code.</p></div><div class="how-steps"><div class="how-step"><span class="step-num">LESSON 01</span><h4>Experiment</h4><p>Predict, try it and notice what changed.</p></div><div class="how-step"><span class="step-num">LESSON 02</span><h4>Design</h4><p>Choose your logic and write pseudocode.</p></div><div class="how-step"><span class="step-num">LESSON 03</span><h4>Build & debug</h4><p>Reveal hints only when needed, then test your code.</p></div></div></div></section>`}
function radioList(name,items,current){return `<div class="radio-choices" role="group" aria-label="${esc(name)}">${items.map((text,i)=>`<button class="radio-choice" data-radio="${name}" data-value="${i}" type="button" aria-pressed="${current===i}"><span class="choice-radio" aria-hidden="true"></span><span>${esc(text)}</span></button>`).join('')}</div>`}
function lessonOne(s,id,r){return `<div class="micro-label">LESSON 01 / DISCOVER</div><h2>Try it. Then explain it.</h2><p class="panel-intro">Programming starts with a question: <strong>What should happen when the visitor acts?</strong> Make a prediction, test the demo and explain what you noticed.</p><div class="activity" style="margin-top:0;border-top:0;padding-top:0"><h3>01. Make a prediction</h3><p>${esc(s.prediction)}</p>${radioList('prediction',s.options,r.prediction)}<div id="prediction-feedback">${r.prediction!==null?`<div class="feedback ${r.prediction===s.answer?'good':''}">${r.prediction===s.answer?'Good reasoning. Test the demo and see what changes.':'Interesting prediction. Test the demo and compare it with what you expected.'}</div>`:''}</div></div><div class="activity"><h3>02. Test the interaction</h3><p><strong>${esc(s.callout)}.</strong> Use the interactive scene on this page. Try the action more than once and look for patterns.</p><div class="note-strip">The demo is a visual example. Your Python Turtle project may use different shapes, coordinates and methods.</div></div><div class="activity"><label class="form-label" for="observe">03. What did you notice?</label><p>${esc(s.observe)}</p><textarea class="field" id="observe" placeholder="I noticed that..." rows="4">${esc(r.observe)}</textarea></div><div class="step-actions"><span id="step-status" class="left-hint">Choose an answer, test the demo and write a short observation.</span><button class="primary" type="button" data-complete="1">Continue to Lesson 2 →</button></div>`}
function lessonTwo(s,id,r){return `<div class="micro-label">LESSON 02 / DESIGN</div><h2>Design the logic before the code.</h2><p class="panel-intro">Your winter scene is different from the demo. Decide what your visitor does and what your own program should do in response.</p><div class="activity" style="margin-top:0;border-top:0;padding-top:0"><h3>01. Break it into three ideas</h3><div class="prompt-grid"><div class="prompt-box"><b>EVENT</b><span>What does the visitor do?</span></div><div class="prompt-box"><b>DECISION</b><span>What does the program check or remember?</span></div><div class="prompt-box"><b>ACTION</b><span>What visibly changes?</span></div></div><div style="margin-top:16px;display:grid;gap:13px"><div><label class="form-label" for="event-input">Event</label><input id="event-input" class="field-short" value="${esc(r.event)}" placeholder="Example: visitor clicks ..."></div><div><label class="form-label" for="condition-input">Decision / state</label><input id="condition-input" class="field-short" value="${esc(r.condition)}" placeholder="Example: if ..."></div><div><label class="form-label" for="action-input">Visible action</label><input id="action-input" class="field-short" value="${esc(r.action)}" placeholder="Example: draw ..."></div></div></div><div class="activity"><h3>02. Pick your main programming idea</h3><p>${esc(s.structure)}</p>${radioList('structure',s.structures,r.structure)}<div id="structure-feedback">${r.structure!==null?`<div class="feedback ${r.structure===s.structureAnswer?'good':''}">${r.structure===s.structureAnswer?'That approach fits the example. Think how you can adapt it.':'That might work in another design. Think about what information must change each time the visitor acts.'}</div>`:''}</div></div><div class="activity"><h3>03. Write your pseudocode</h3><p>Use your own words. You can use <strong>WHEN, IF, ELSE, REPEAT, MOVE, DRAW</strong>. You do not need perfect Python syntax.</p><label class="form-label" for="pseudo">Your interaction plan</label><textarea class="field" id="pseudo" rows="7" placeholder="WHEN the visitor...&#10;IF ...&#10;    ...&#10;OTHERWISE ...">${esc(r.pseudo)}</textarea><button class="ghost-btn" type="button" id="show-plan-prompt">Need sentence starters? <span aria-hidden="true">⌄</span></button><div id="plan-prompt" style="display:none" class="hint-card"><b>Use this structure—not a finished answer:</b><pre>${esc(s.planStarter)}</pre><p>Try to replace these blanks with the exact object and behaviour from <strong>your</strong> scene.</p></div></div><div class="step-actions"><span id="step-status" class="left-hint">Select a programming idea and write a plan in your own words.</span><button class="primary" type="button" data-complete="2">Unlock build hints →</button></div>`}
function eventBasics(id){
 const h=HELP[id], stateNeeded=['toggle','palette','reveal','move','depart'].includes(id);
 const isDrag=id==='drag',isHover=id==='hover';
 const heading=isDrag?'01. How does Turtle respond to dragging?':isHover?'01. How can Turtle reveal a hover clue?':'01. How does Turtle know someone clicked?';
 const intro=isDrag?'Start with a visible Turtle shape. Give it a drag handler that receives x and y, then test whether it follows the mouse.':isHover?'Standard Turtle has no simple onhover() method. Try a click-to-reveal interaction first; motion detection is a harder extension.':'There are three pieces. Start by making a click print coordinates. Then decide what your own scene should do.';
 return `<div class="activity activity-basics" style="margin-top:0;border-top:0;padding-top:0">
  <h3>${heading}</h3>
  <p>${intro}</p>
  <div class="event-steps"><div><b>1</b><span>Make a function</span></div><span aria-hidden="true">→</span><div><b>2</b><span>Connect the click</span></div><span aria-hidden="true">→</span><div><b>3</b><span>Run and test</span></div></div>
  <details class="learn-detail"><summary>Show me how screen.onclick() works <span>＋</span></summary><div class="detail-inside"><p><strong>Try this small test:</strong> It prints click coordinates. It does not change your artwork. It assumes you already created <code>screen = turtle.Screen()</code>.</p><pre>${esc('def test_click(x, y):\n    print("Clicked:", x, y)\n\nscreen.onclick(test_click)')}</pre><p><code>x</code> and <code>y</code> come from Turtle automatically. Notice <code>test_click</code> has <strong>no parentheses</strong> in <code>onclick()</code>. You are giving Turtle the function to call later.</p><p>For a particular object, use an <code>if</code> statement to check whether the click is inside its coordinates.</p></div></details>
  ${stateNeeded?`<details class="learn-detail"><summary>What is a state variable? Why does the starter use global? <span>＋</span></summary><div class="detail-inside"><p><strong>State = what your scene remembers.</strong> A variable outside a function can remember whether a light is on after each click.</p><pre>${esc('light_on = False\n\ndef change_light():\n    global light_on\n    light_on = not light_on')}</pre><p><code>global light_on</code> tells Python that this function will <strong>change</strong> the variable defined outside it. Without that line, assigning <code>light_on = ...</code> inside the function creates a local variable instead. <strong>You do not need global for every function</strong>—only when you need to reassign an outside variable.</p><p>Try printing the value before you worry about redrawing anything.</p></div></details>`:''}
 </div>
 <div class="activity method-activity"><h3>02. Your Turtle method toolbox</h3><p>These are possible tools for <strong>${esc(SKILLS[id].title.toLowerCase())}</strong>. Choose only the ones your design needs.</p><div class="tool-grid">${h.methods.map(m=>`<div class="tool-card"><code>${esc(m[0])}</code><span>${esc(m[1])}</span></div>`).join('')}</div><div class="small-reminder">${esc(h.extra)}</div><details class="learn-detail"><summary>See common interaction commands <span>＋</span></summary><div class="detail-inside"><div class="tool-grid">${[
 ['screen.onclick(function_name)','Run on a screen click; handler(x, y).'],['screen.onkey(function_name, "space")','Run when a key is released; handler takes no arguments. Use screen.listen().'],['pen.onclick(function_name)','Click the visible Turtle shape, not the lines it drew.'],['pen.ondrag(function_name)','Drag a visible Turtle using handler(x, y).'],['pen.onrelease(function_name)','Run when the mouse button is released over a Turtle.'],['pen.clear()','Erase only this Turtle’s drawings.'],['screen.update()','Refresh after drawing when screen.tracer(0) is active.'],['screen.ontimer(function_name, 100)','Optional: call a function after 100 ms for animation.']
 ].map(m=>`<div class="tool-card"><code>${esc(m[0])}</code><span>${esc(m[1])}</span></div>`).join('')}</div><p>No native <code>screen.onhover()</code> method exists. You can use clicking instead, or use advanced Tkinter event handling.</p></div></details></div>`;
}
function lessonThree(s,id,r){const n=(live['hints-'+id]||0);return `<div class="micro-label">LESSON 03 / BUILD & DEBUG</div><h2>Build your own version.</h2><p class="panel-intro">You've planned the interaction. Now learn how Python Turtle receives input, then test small pieces in VS Code. Reveal only the help you need.</p>${eventBasics(id)}<div class="activity"><h3>03. Try it before revealing hints</h3><p>Write a first version of your click or movement function. Test one tiny part—even if it only prints a message—before going further.</p><div id="hints">${Array.from({length:Math.min(n,5)},(_,i)=>hintHtml(s,id,i+1)).join('')}</div>${n<5?`<button class="hint-button" type="button" id="reveal-hint">Reveal Hint ${n+1} — ${hintLabel(n+1)} <span aria-hidden="true">＋</span></button>`:''}<div class="code-caution"><strong>Watch out:</strong> ${esc(s.caution)}</div></div><div class="activity"><h3>04. Test the real Python program</h3><p>Check the boxes only after you've tested your own code in VS Code.</p><div class="checklist">${s.build.map((task,i)=>`<label class="checkline"><input type="checkbox" data-task="${i}" ${r.checks?.[i]?'checked':''}><span>${esc(task)}</span></label>`).join('')}</div></div><div class="activity"><h3>05. Quick code check</h3><p>${esc(s.quiz)}</p>${radioList('quiz',s.quizOptions,r.quiz)}<div id="quiz-feedback">${r.quiz!==null?`<div class="feedback ${r.quiz===s.quizAnswer?'good':'warn'}">${r.quiz===s.quizAnswer?'Correct. You can explain why this works.':'Not quite. Review the difference between Turtle methods, states and event handlers.'}</div>`:''}</div></div><div class="activity"><h3>06. Tell us what you learned</h3><p>${esc(s.reflect)}</p><textarea id="reflection" class="field" rows="4" placeholder="I tried ... and discovered ...">${esc(r.reflection)}</textarea></div>${done(id,3)?`<div class="celebrate"><div class="explain-label">PATH COMPLETE</div><h3>You planned, tested and debugged.</h3><p>Your lesson notes are saved in this browser. Keep testing the real Python scene and share your result with your teacher.</p></div>`:''}<div class="step-actions"><div><button class="outline-btn" type="button" id="export-plan">↓ Export my lesson notes</button></div><span id="step-status" class="left-hint">Test your code, answer the question, then reflect.</span><button class="primary" type="button" data-complete="3">${done(id,3)?'Save lesson again':'Finish this pathway'} →</button></div>`}
function hintHtml(s,id,n){const h=HELP[id];let content='';if(n===1)content=`<p>${esc(s.hint1)}</p>`;if(n===2)content=`<p>${esc(s.hint2)}</p><p><strong>Method check:</strong> You can look back at the Turtle method toolbox above to find the exact function spelling and whether it needs <code>x, y</code>.</p>`;if(n===3)content=`<p><strong>${esc(h.miniTitle)}</strong> — test this small idea in isolation, then adapt it to a different object.</p><pre>${esc(h.mini)}</pre>`;if(n===4)content=`<p>${esc(h.state)}</p><p><strong>Debugging tip:</strong> Add <code>print()</code> in the handler to check if it runs before attempting the full visual effect.</p>`;if(n===5)content=`<pre>${esc(s.hint3)}</pre><p>Not a finished program: you must add the missing logic, register the correct events, and connect your own drawing functions. Any TODO or blank is yours to complete.</p>`;return `<div class="hint-card"><b>HINT ${n} / ${HINT_TITLES[n-1]}</b>${content}</div>`}
function demoPanel(id){let d=demoStateFor(id);return `<aside class="demo-panel" aria-label="Interactive winter demo"><div class="demo-top"><div><strong>THE PLAYGROUND</strong><p>Test the idea—not the Python code.</p></div><span class="demo-badge">LIVE DEMO</span></div><div id="demo-stage" class="demo-stage">${demoSvg(id)}</div><div class="demo-hint-banner"><span aria-hidden="true"></span><div>${esc(SKILLS[id].callout)}</div></div>${id==='stamp'?`<div class="demo-secondary-actions"><button type="button" data-stamp="snow" aria-pressed="${d.stampType==='snow'}">❄ Snowflake</button><button type="button" data-stamp="foot" aria-pressed="${d.stampType==='foot'}">⌁ Footprints</button></div>`:''}<div class="demo-actions"><span id="demo-count" class="demo-count">${d.count} interaction${d.count===1?'':'s'} tried</span><button class="demo-reset" id="demo-reset" type="button">↺ Reset demo</button></div></aside>`}
function renderLesson(id,step){const s=SKILLS[id],r=record(id),p=skillProgress(id);state.last=id;save();const body=step===1?lessonOne(s,id,r):step===2?lessonTwo(s,id,r):lessonThree(s,id,r);return `<div class="wrap lesson-layout"><a href="#home" class="back">← All interactions</a><div class="lesson-head"><div><div class="lesson-kicker">INTERACTION ${s.num} / ${s.category}</div><h1>${esc(s.title)}</h1><p>${esc(s.objective)}</p></div><div class="lesson-count">${p} of 3 lessons complete</div></div><div class="stages">${STAGES.map((name,i)=>{let n=i+1,ac=allowed(id,n),fin=done(id,n);return `<button class="stage ${step===n?'active':''} ${fin?'done':''}" ${!ac?'disabled':''} data-stage="${n}" type="button" aria-current="${step===n?'step':'false'}"><span class="stage-icon">${fin?'✓':String(n).padStart(2,'0')}</span><span><small>${fin?'COMPLETE':ac?'LESSON '+n:'LOCKED'}</small><strong>${name}</strong></span></button>`}).join('')}</div><div class="workspace-grid"><section class="lesson-panel" aria-label="Lesson activities">${body}</section>${demoPanel(id)}</div></div>`}
function render(){const r=route();$('#app').innerHTML=r.home?renderHome():renderLesson(r.id,r.step);updateHeader();if(!r.home){attachLesson(r.id,r.step);attachDemo(r.id)}window.scrollTo({top:0,behavior:'instant'})}
window.addEventListener('hashchange',render);
function updateStatus(id,step,explicit=false){const r=record(id),d=demoStateFor(id),p=$('#step-status');if(!p)return;let m='',ok=false;if(step===1){ok=r.prediction!==null&&d.count>0&&r.observe.trim().length>=10;m=ok?'Ready: you predicted, tested and explained.':'To continue: choose a prediction, try the demo once, and write at least one sentence.';}else if(step===2){ok=r.structure!==null&&r.pseudo.trim().length>=28;m=ok?'Your plan is ready to try in Python.':'To continue: choose a programming idea and write at least two lines of pseudocode.';}else{ok=r.checks?.filter(Boolean).length>=2&&r.quiz===SKILLS[id].quizAnswer&&r.reflection.trim().length>=12;m=ok?'You’ve completed the check-in. Save this pathway.':'To finish: test at least two items, answer the code check correctly and write a short reflection.';}p.textContent=m;p.classList.toggle('error',explicit&&!ok);return ok}
function attachLesson(id,step){const r=record(id);$$('[data-stage]').forEach(b=>b.addEventListener('click',()=>{const n=Number(b.dataset.stage);if(allowed(id,n))location.hash=link(id,n)}));$$('[data-radio]').forEach(b=>b.addEventListener('click',()=>{const field=b.dataset.radio,value=Number(b.dataset.value);r[field]=value;save();$$(`[data-radio="${field}"]`).forEach(t=>t.setAttribute('aria-pressed',String(t===b)));const s=SKILLS[id];let f=$(`#${field}-feedback`);if(f){let right=field==='prediction'?s.answer:field==='structure'?s.structureAnswer:s.quizAnswer;let msg=field==='prediction'?(value===right?'Good reasoning. Now test your prediction.':'Try the demo and look for evidence. You can change your answer.'):(field==='structure'?(value===right?'That structure fits the feature. Adapt it to your scene.':'Consider what the program must remember and change.'):(value===right?'Correct. Explain why it works.':'Try again. Look back at the methods and states.'));f.innerHTML=`<div class="feedback ${value===right?'good':field==='quiz'?'warn':''}">${msg}</div>`;}updateStatus(id,step)}));['observe','event-input','condition-input','action-input','pseudo','reflection'].forEach(key=>{const el=$('#'+key);if(el)el.addEventListener('input',()=>{const field={'event-input':'event','condition-input':'condition','action-input':'action'}[key]||key;r[field]=el.value;save();updateStatus(id,step)})});$$('[data-task]').forEach(e=>e.addEventListener('change',()=>{r.checks[Number(e.dataset.task)]=e.checked;save();updateStatus(id,step)}));const show=$('#show-plan-prompt');if(show)show.addEventListener('click',()=>{const panel=$('#plan-prompt');panel.style.display=panel.style.display==='none'?'block':'none';show.setAttribute('aria-expanded',String(panel.style.display==='block'))});const hint=$('#reveal-hint');if(hint)hint.addEventListener('click',()=>{const num=Math.min(5,(live['hints-'+id]||0)+1);live['hints-'+id]=num;$('#hints').insertAdjacentHTML('beforeend',hintHtml(SKILLS[id],id,num));if(num<5){hint.innerHTML=`Reveal Hint ${num+1} — ${hintLabel(num+1)} ＋`}else hint.remove()});const exportBtn=$('#export-plan');if(exportBtn)exportBtn.addEventListener('click',()=>downloadNotes(id));$$('[data-complete]').forEach(b=>b.addEventListener('click',()=>{const n=Number(b.dataset.complete);if(!updateStatus(id,n,true))return;state.complete[id]||=[false,false,false];state.complete[id][n-1]=true;save();if(n<3)location.hash=link(id,n+1);else{render();const doneBox=$('.celebrate');if(doneBox)doneBox.scrollIntoView({block:'nearest',behavior:'smooth'});}}));updateStatus(id,step)}
function downloadNotes(id){const s=SKILLS[id],r=record(id),str=[`TURTLE: WINTER INTERACTIVE SCENE PROJECT | ${s.title}`,`WINTER INTERACTION PLANNING`,"",`PREDICTION: ${r.prediction===null?'':s.options[r.prediction]}`,`OBSERVATION: ${r.observe||''}`,`EVENT: ${r.event||''}`,`CONDITION: ${r.condition||''}`,`ACTION: ${r.action||''}`,`LOGIC CHOICE: ${r.structure===null?'':s.structures[r.structure]}`,"",'MY PSEUDOCODE:',r.pseudo||'',"",'MY REFLECTION:',r.reflection||'',"",'This is a student planning record, not generated Python source code.'].join('\n');const blob=new Blob([str],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`winter-${id}-student-plan.txt`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function demoRefresh(id){const stage=$('#demo-stage');if(stage){stage.innerHTML=demoSvg(id);attachSvgEvents(id)}const d=demoStateFor(id),count=$('#demo-count');if(count)count.textContent=`${d.count} interaction${d.count===1?'':'s'} tried`;updateStatus(id,route().step)}
function demoAction(id,kind,e){const d=demoStateFor(id);if(id==='toggle'){d.gold=!d.gold;d.count++;demoRefresh(id);$$('.js-leaves',$('#demo-svg')).forEach((node,i)=>node.setAttribute('fill',d.gold?(i===0?'#e9b966':'#f4d68c'):(i===0?'#2f856b':'#3b9b79')))}else if(id==='palette'){d.idx=(d.idx+1)%4;d.count++;demoRefresh(id);const gift=$('.js-wrap',$('#demo-svg'));if(gift)gift.setAttribute('fill',['#c74b50','#4c8ba1','#ac77ab','#2f8e72'][d.idx])}else if(id==='reveal'){d.open=!d.open;d.count++;demoRefresh(id)}else if(id==='move'){d.moved=!d.moved;d.count++;demoRefresh(id)}else if(id==='hover'){d.hover=kind!=='leave';if(kind!=='leave')d.count++;demoRefresh(id)}else if(id==='stamp'){const svg=$('#demo-svg'),p=eventToSvg(svg,e);if(p.y>270)return;d.marks.push({x:p.x,y:p.y,type:d.stampType});d.count++;demoRefresh(id)}else if(id==='depart'){departAnimation(id)} }
function eventToSvg(svg,e){const rect=svg.getBoundingClientRect();return{x:(e.clientX-rect.left)*520/rect.width,y:(e.clientY-rect.top)*330/rect.height}}
function departAnimation(id){const d=demoStateFor(id);if(d.animating)return;d.count++;d.animating=true;const from=d.away?-160:166,to=d.away?166:650,svg=$('#demo-svg'),sleigh=$('#demo-sleigh');d.away=!d.away;let started=null;const duration=950;function frame(t){if(!document.body.contains(svg)){d.animating=false;return}if(started===null)started=t;const p=Math.min(1,(t-started)/duration),easing=1-(1-p)**3,x=from+(to-from)*easing;sleigh.setAttribute('transform',`translate(${x} 240) scale(.83)`);if(p<1)requestAnimationFrame(frame);else{d.animating=false;demoRefresh(id)}}requestAnimationFrame(frame);const cnt=$('#demo-count');if(cnt)cnt.textContent=`${d.count} interactions tried`;updateStatus(id,route().step)}
function attachDemo(id){const reset=$('#demo-reset');if(reset)reset.addEventListener('click',()=>{live[id]=null;demoStateFor(id);demoRefresh(id)});$$('[data-stamp]').forEach(btn=>btn.addEventListener('click',()=>{demoStateFor(id).stampType=btn.dataset.stamp;$$('[data-stamp]').forEach(t=>t.setAttribute('aria-pressed',String(t===btn)));}));attachSvgEvents(id)}
function attachSvgEvents(id){const svg=$('#demo-svg');if(!svg)return;const d=demoStateFor(id);if(id==='toggle'&&d.gold)$$('.js-leaves',svg).forEach((node,i)=>node.setAttribute('fill',i===0?'#e9b966':'#f4d68c'));if(id==='palette')$('.js-wrap',svg).setAttribute('fill',['#c74b50','#4c8ba1','#ac77ab','#2f8e72'][d.idx]);if(['toggle','palette','reveal','move'].includes(id)){const target=$('[data-action]',svg);if(target){target.addEventListener('click',e=>{e.stopPropagation();demoAction(id,'click',e)});target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();demoAction(id,'click',e)}})}}else if(id==='stamp'){svg.addEventListener('click',e=>demoAction(id,'click',e))}else if(id==='depart'){svg.style.cursor='pointer';svg.addEventListener('click',()=>demoAction(id,'click'))}else if(id==='hover'){const area=$('[data-action="hover"]',svg);area.addEventListener('mouseenter',()=>{d.hover=true;d.count++;const b=$('#hover-bubble',svg);if(b)b.style.display='block';updateStatus(id,route().step);const ct=$('#demo-count');if(ct)ct.textContent=`${d.count} interactions tried`});area.addEventListener('mouseleave',()=>{d.hover=false;const b=$('#hover-bubble',svg);if(b)b.style.display='none'});area.addEventListener('click',()=>{d.hover=!d.hover;if(d.hover)d.count++;const b=$('#hover-bubble',svg);if(b)b.style.display=d.hover?'block':'none';const ct=$('#demo-count');if(ct)ct.textContent=`${d.count} interactions tried`;updateStatus(id,route().step)})}else if(id==='drag'){const star=$('#drag-star',svg);let dragging=false,offsetX=0,offsetY=0,startX=0,startY=0;star.addEventListener('pointerdown',e=>{e.preventDefault();const pos=eventToSvg(svg,e);dragging=true;offsetX=pos.x-d.starX;offsetY=pos.y-d.starY;startX=pos.x;startY=pos.y;star.setPointerCapture(e.pointerId)});star.addEventListener('pointermove',e=>{if(!dragging)return;const pos=eventToSvg(svg,e);d.starX=Math.min(490,Math.max(30,pos.x-offsetX));d.starY=Math.min(297,Math.max(35,pos.y-offsetY));star.setAttribute('transform',`translate(${d.starX} ${d.starY})`)});star.addEventListener('pointerup',e=>{if(!dragging)return;dragging=false;const pos=eventToSvg(svg,e);if(Math.hypot(pos.x-startX,pos.y-startY)>8){d.count++;if(d.starX>285&&d.starX<450&&d.starY>38&&d.starY<230){d.dragged=true;d.starX=380;d.starY=60;}demoRefresh(id)}});star.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();d.dragged=true;d.starX=380;d.starY=60;d.count++;demoRefresh(id)}})}}
window.addEventListener('DOMContentLoaded',render);

/* === EXTRA STUDENT SUPPORT FOR LESSON 3 === */

const TURTLE_HELP = {
  toggle: {
    tools: [
      ["screen.onclick(change_tree)", "Run a function when the screen is clicked."],
      ["pen.clear()", "Erase the old tree before redrawing."],
      ["pen.fillcolor(colour)", "Set the fill colour for the next drawing."],
      ["screen.update()", "Refresh when screen.tracer(0) is enabled."]
    ],
    tip: "Use a Boolean such as is_gold = False. Each click flips the state. Changing fillcolor alone does not recolour an existing drawing."
  },

  palette: {
    tools: [
      ["screen.onclick(next_colour)", "Call a function when the visitor clicks."],
      ["colours[index]", "Read a colour from a list."],
      ["(index + 1) % len(colours)", "Advance and return to the first colour."],
      ["pen.clear()", "Erase the previous drawing before redrawing."]
    ],
    tip: "Keep colour_index outside the click function. If you assign to it inside the function, global colour_index is one way to update it."
  },

  stamp: {
    tools: [
      ["screen.onclick(add_snow)", "Receive x and y from the mouse click."],
      ["effects_pen.goto(x, y)", "Move to the clicked coordinates."],
      ['effects_pen.dot(12, "white")', "Draw a small white dot."],
      ["effects_pen.clear()", "Erase only the marks made by this Turtle."]
    ],
    tip: "This feature may not need a global variable. Start with one click adding one mark, then create your own snowflake function."
  },

  reveal: {
    tools: [
      ["screen.onclick(open_present)", "Run a function when the screen is clicked."],
      ["if opened: / else:", "Decide which version to display."],
      ["pen.clear()", "Erase the previous drawing."],
      ["screen.update()", "Show changes if tracer(0) is enabled."]
    ],
    tip: "Try opened = False. When the visitor clicks, change that value and redraw the gift or surprise."
  },

  move: {
    tools: [
      ["screen.onclick(move_object)", "Detect the visitor's click."],
      ["pen.goto(x, y)", "Move a Turtle to a coordinate."],
      ["pen.setx(new_x)", "Change a Turtle's x-coordinate."],
      ["pen.clear()", "Erase an old drawing before redrawing."]
    ],
    tip: "Moving the pen does not move lines already drawn on the screen. You need to clear and redraw the object, or move a visible Turtle shape."
  },

  depart: {
    tools: [
      ["screen.onclick(toggle_trip)", "Allow clicks even when the object is off-screen."],
      ["screen.ontimer(step, 30)", "Schedule another animation step after 30 ms."],
      ["pen.goto(x, y)", "Move a Turtle to a new position."],
      ["screen.update()", "Display each animation frame."]
    ],
    tip: "Use a Boolean such as is_away. First click moves the object beyond the edge; second click returns it to the starting position."
  },

  drag: {
    tools: [
      ["gift.ondrag(drag_gift)", "Call a function while dragging a visible Turtle."],
      ["def drag_gift(x, y):", "Receive mouse coordinates."],
      ["gift.goto(x, y)", "Move the Turtle toward the cursor."],
      ["gift.onrelease(drop_gift)", "Run a function when the mouse is released."]
    ],
    tip: "Start by dragging a visible Turtle cursor. Dragging a shape drawn by a hidden pen requires a different approach."
  },

  hover: {
    tools: [
      ["pen.onclick(show_secret)", "Click a visible Turtle shape."],
      ["screen.onclick(show_secret)", "Click inside a coordinate region."],
      ['screen.onkey(show_secret, "h")', "Reveal something using the H key."],
      ["screen.listen()", "Enable keyboard events."]
    ],
    tip: "Standard Turtle does not have a built-in onhover() method. True hovering requires advanced Tkinter event handling. Clicking or pressing a key is easier."
  }
};

// Tiny examples that introduce events without solving the project
function basicEventExample(id) {
  if (id === "drag") {
    return `def follow_mouse(x, y):
    gift.goto(x, y)

gift.ondrag(follow_mouse)`;
  }

  if (id === "hover") {
    return `def show_message():
    print("Hello!")

screen.onkey(show_message, "h")
screen.listen()`;
  }

  return `def test_click(x, y):
    print("Clicked at:", round(x), round(y))

screen.onclick(test_click)`;
}

// Create five gradual hints
function extraHint(id, level) {
  const s = SKILLS[id];
  const help = TURTLE_HELP[id];

  const labels = [
    "THINK",
    "USEFUL METHODS",
    "TRY A TINY EXAMPLE",
    "STATE & DEBUG",
    "UNFINISHED STARTER"
  ];

  let content = "";

  if (level === 1) {
    content = `<p>${esc(s.hint1)}</p>`;
  }

  if (level === 2) {
    content = `<p>${esc(s.hint2)}</p>`;
  }

  if (level === 3) {
    content = `
      <p>Try this small experiment first. What does each line do?</p>
      <pre>${esc(basicEventExample(id))}</pre>
      <p>Notice how the event is connected to a function.</p>
    `;
  }

  if (level === 4) {
    content = `
      <p>${esc(help.tip)}</p>
      <p>
        <strong>What is global?</strong>
        If you assign a new value to a variable defined outside
        a function, global variable_name tells Python to update
        that outside variable. You don't need global just to read it.
      </p>
      <p>
        <strong>Debug:</strong>
        Does the event function run? Try a print statement.
        If you use tracer(0), did you call screen.update()?
      </p>
    `;
  }

  if (level === 5) {
    content = `
      <pre>${esc(s.hint3)}</pre>
      <p>
        Complete the missing conditions, coordinates
        and drawing instructions yourself.
      </p>
    `;
  }

  return `
    <div class="hint-card">
      <b>HINT ${level} / ${labels[level - 1]}</b>
      ${content}
    </div>
  `;
}

// Add a Turtle interaction lesson to Build & Debug
const previousLessonThree = lessonThree;

lessonThree = function (skill, id, record) {
  let html = previousLessonThree(skill, id, record);
  const help = TURTLE_HELP[id];

  if (!help) return html;

  const methodCards = help.tools.map(([method, meaning]) => `
    <div class="winter-tool">
      <code>${esc(method)}</code>
      <span>${esc(meaning)}</span>
    </div>
  `).join("");

  const basics = `
    <div class="activity">

      <h3>Before coding: How does Turtle detect an interaction?</h3>

      <p>
        <strong>Event → Function → Visible change.</strong>
        A click calls a function. That function can check a
        condition, change a value, and redraw an object.
      </p>

      <details class="winter-expand">
        <summary>Show me how screen.onclick() works</summary>
        <pre>${esc(`def check_click(x, y):
    print(x, y)

screen.onclick(check_click)`)}</pre>
        <p>
          Turtle supplies x and y. Write check_click,
          not check_click(), when registering the event.
        </p>
      </details>

      <details class="winter-expand">
        <summary>What is a state variable? What does global mean?</summary>
        <p>
          A state variable remembers something between clicks.
          For example: <code>light_on = False</code>.
        </p>
        <p>
          If your function changes that outside variable,
          use <code>global light_on</code>.
          To switch a Boolean, use
          <code>light_on = not light_on</code>.
        </p>
      </details>

      <h3>Methods you could use</h3>

      <div class="winter-tools">
        ${methodCards}
      </div>

      <p>
        <strong>Think:</strong>
        Which two methods would help your own pseudocode?
        You don't need to use every method here.
      </p>

    </div>
  `;

  html = html.replace(
    '<div class="activity"><h3>02. Try without hints first',
    basics + '<div class="activity"><h3>02. Try without hints first'
  );

  // Replace the old three-hint area with five hints
  const begin = html.indexOf('<div id="hints">');
  const end = html.indexOf('<div class="code-caution">', begin);

  if (begin >= 0 && end >= 0) {
    const count = Math.min(5, live["hints-" + id] || 0);

    const hints = Array.from(
      { length: count },
      (_, i) => extraHint(id, i + 1)
    ).join("");

    const nextButton = count < 5
      ? `<button type="button" class="hint-button"
          id="winter-next-hint">
          Reveal hint ${count + 1} ＋
        </button>`
      : "";

    html =
      html.slice(0, begin) +
      `<div id="hints">${hints}</div>${nextButton}` +
      html.slice(end);
  }

  return html;
};

// Connect the new hint button
const previousAttachLesson = attachLesson;

attachLesson = function (id, step) {
  previousAttachLesson(id, step);

  const button = document.getElementById("winter-next-hint");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = Math.min(
      5,
      (live["hints-" + id] || 0) + 1
    );

    live["hints-" + id] = next;

    document.getElementById("hints").insertAdjacentHTML(
      "beforeend",
      extraHint(id, next)
    );

    if (next === 5) {
      button.remove();
    } else {
      button.textContent = `Reveal hint ${next + 1} ＋`;
    }
  });
};

// Style the new help panels
const winterHelpStyle = document.createElement("style");

winterHelpStyle.textContent = `
.winter-expand {
  border: 1px solid #d9dfd6;
  border-radius: 12px;
  padding: 12px 15px;
  margin: 12px 0;
  background: #f8faf5;
}

.winter-expand summary {
  cursor: pointer;
  font-weight: 700;
  color: #245647;
}

.winter-expand p {
  margin: 12px 0 2px;
}

.winter-expand pre,
.hint-card pre {
  font: 14px/1.65 Consolas, monospace;
  white-space: pre;
  overflow-x: auto;
  max-width: 100%;
  background: #20342d;
  color: white;
  border-radius: 10px;
  padding: 15px;
}

.winter-tools {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 16px 0;
}

.winter-tool {
  min-width: 0;
  padding: 14px;
  background: #edf5ef;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.winter-tool code {
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
  color: #255948;
}

.winter-tool span {
  font-size: 14px;
  line-height: 1.45;
}

@media (max-width: 650px) {
  .winter-tools {
    grid-template-columns: 1fr;
  }
}
`;

document.head.appendChild(winterHelpStyle);

/* === END EXTRA STUDENT SUPPORT === */
/* BEGIN: Beginner mini-labs for Turtle Winter Project.
   Paste after the existing app.js code. No other files to edit. */
const MINI_LABS = {
  toggle: {
    headline: 'Make a click work before changing a tree',
    note: 'Your existing draw_tree(tree_points) function can stay exactly as it is. A second pen can draw a new colour over the leaves.',
    steps: [
      ['1. Detect one click', 'Add this above turtle.done(). Run your scene and click anywhere. Look in the VS Code terminal.',
`def test_click(x, y):
    print("Clicked!", round(x), round(y))

screen.onclick(test_click)`,
'Can you see the word Clicked? If not, check the function name and the () on onclick().'],
      ['2. Draw gold on a separate pen', 'Replace your test_click function with this experiment. It adds one gold circle without changing your original tree.',
`gold_pen = turtle.Turtle()
gold_pen.hideturtle()
gold_pen.penup()

def change_tree(x, y):
    gold_pen.goto(100, 40)  # Change this position
    gold_pen.dot(60, "gold")
    screen.update()        # For tracer(0)

screen.onclick(change_tree)`,
'Click once. Does a gold dot appear? Later, replace the dot with your own tree-leaf drawing instructions.'],
      ['3. Make the second click undo it', 'Now remember whether the gold overlay is showing. Keep gold_pen from Step 2; replace only your change_tree function.',
`gold_on = False

def change_tree(x, y):
    global gold_on
    gold_on = not gold_on    # Switch Yes / No
    gold_pen.clear()        # Remove old gold marks
    if gold_on:
        gold_pen.goto(100, 40)
        gold_pen.dot(60, "gold")
    screen.update()

screen.onclick(change_tree)`,
'First click: gold appears. Second click: gold disappears. "global" lets the function change gold_on between clicks. Next: trace your own leaf coordinates using gold_pen.']
    ]
  },
  palette: {
    headline: 'Use a colour list, one idea at a time',
    note: 'Start by printing colour names. Do not try to recolour your finished present yet.',
    steps: [
      ['1. Make a colour list', 'Choose three colours. Does the list have index 0, 1 and 2?',
`colours = ["red", "blue", "gold"]
print(colours[0])
print(colours[1])`,
'Try changing the list to your own hexadecimal colour codes.'],
      ['2. Move to the next colour on a click', 'Add this beneath the list. Print the next colour each time.',
`colour_number = 0

def next_colour(x, y):
    global colour_number
    colour_number = colour_number + 1
    if colour_number == len(colours):
        colour_number = 0
    print(colours[colour_number])

screen.onclick(next_colour)`,
'After three clicks, does it return to the first colour? The if statement prevents an index error.'],
      ['3. Test your colours with one dot', 'Add a separate pen. Inside next_colour, after print(), add the three lines shown below.',
`test_pen = turtle.Turtle()
test_pen.hideturtle()
test_pen.penup()

def draw_colour_dot(chosen_colour):
    test_pen.clear()
    test_pen.goto(0, 50)
    test_pen.dot(80, chosen_colour)
    screen.update()

# ADD this call inside next_colour():
# draw_colour_dot(colours[colour_number])`,
'Once the dot works, replace it with YOUR existing present-drawing instructions. A colour change needs a redraw.']
    ]
  },
  stamp: {
    headline: 'Make a mark exactly where the visitor clicks',
    note: 'This is a good first interaction because it does not need an if statement or a global variable.',
    steps: [
      ['1. Find the click position', 'Try printing the x and y values supplied by Turtle.',
`def find_click(x, y):
    print(round(x), round(y))

screen.onclick(find_click)`,
'Click the four corners. What changes: x, y, or both?'],
      ['2. Add a snow dot', 'Replace find_click with this function. A separate pen keeps snow independent from the background.',
`snow_pen = turtle.Turtle()
snow_pen.hideturtle()
snow_pen.penup()

def add_snow(x, y):
    snow_pen.goto(x, y)
    snow_pen.dot(12, "white")
    screen.update()

screen.onclick(add_snow)`,
'Click three different places. Each click should leave a new dot.'],
      ['3. Only let snow appear in the sky', 'Edit add_snow to add this condition. Decide where the sky ends in your own scene.',
`def add_snow(x, y):
    if y > 0:             # Change this boundary
        snow_pen.goto(x, y)
        snow_pen.dot(12, "white")
        screen.update()`,
'Now replace dot() with your own draw_snowflake(x, y) function, if you have one.']
    ]
  },
  reveal: {
    headline: 'Show a surprise, then hide it again',
    note: 'Keep the surprise on its own pen. This lets you erase it without removing the rest of the scene.',
    steps: [
      ['1. Test the gift click', 'For your first test, a click anywhere will work. Checking the exact gift area comes later.',
`def test_gift(x, y):
    print("Gift clicked!")

screen.onclick(test_gift)`,
'Can you see Gift clicked! in the terminal?'],
      ['2. Make a surprise appear', 'Replace the test function with this short example.',
`surprise_pen = turtle.Turtle()
surprise_pen.hideturtle()
surprise_pen.penup()

def show_surprise(x, y):
    surprise_pen.goto(0, 80)
    surprise_pen.dot(60, "gold")
    screen.update()

screen.onclick(show_surprise)`,
'Click once. After this works, swap the dot for your own snowman, star or gift drawing.'],
      ['3. Click again to hide it', 'Keep surprise_pen from Step 2. Replace show_surprise with this function.',
`gift_open = False

def show_surprise(x, y):
    global gift_open
    gift_open = not gift_open
    surprise_pen.clear()
    if gift_open:
        surprise_pen.goto(0, 80)
        surprise_pen.dot(60, "gold")
    screen.update()

screen.onclick(show_surprise)`,
'The second click removes the surprise. Later, add an if statement to check whether the gift itself was clicked.']
    ]
  },
  move: {
    headline: 'Move a visible Turtle before moving a drawing',
    note: 'goto() moves the Turtle cursor; it does not move polygons previously drawn by another pen.',
    steps: [
      ['1. Create something movable', 'Try a built-in Turtle shape first.',
`moving = turtle.Turtle()
moving.shape("circle")
moving.color("gold")
moving.penup()
moving.goto(-150, -50)`,
'Why do we use penup()? It prevents a trail.'],
      ['2. Move it when clicked', 'Add a click function. This moves the visible circle to the right.',
`def move_right(x, y):
    moving.goto(150, -50)
    screen.update()

screen.onclick(move_right)`,
'Does the circle move when you click? No state variable needed yet.'],
      ['3. Click again to move back', 'Replace move_right with the new two-position function.',
`moved = False

def move_right(x, y):
    global moved
    moved = not moved
    if moved:
        moving.goto(150, -50)
    else:
        moving.goto(-150, -50)
    screen.update()

screen.onclick(move_right)`,
'To move your own hand-drawn sleigh, draw it with a separate pen, clear it, and redraw it in the new location.']
    ]
  },
  depart: {
    headline: 'Send an object past the edge, then bring it back',
    note: 'Make the object disappear instantly first. Smooth animation is an optional second challenge.',
    steps: [
      ['1. Create a test sleigh marker', 'Use a visible shape as a placeholder. The standard 900 × 600 screen is roughly x = -450 to +450.',
`sleigh = turtle.Turtle()
sleigh.shape("triangle")
sleigh.color("red")
sleigh.penup()
sleigh.goto(-150, -50)`,
'Can you see your red triangle at the starting position?'],
      ['2. Send it outside the screen', 'Register the click on screen, not on sleigh. Otherwise the next click would be impossible after it disappears.',
`def fly_away(x, y):
    sleigh.goto(600, -50)
    screen.update()

screen.onclick(fly_away)`,
'Does it leave the frame when you click?'],
      ['3. Second click brings it home', 'Replace fly_away with this version. The variable remembers whether it is outside.',
`away = False

def fly_away(x, y):
    global away
    away = not away
    if away:
        sleigh.goto(600, -50)
    else:
        sleigh.goto(-150, -50)
    screen.update()

screen.onclick(fly_away)`,
'Adaptation: hand-drawn objects must be cleared and redrawn. Advanced students can use ontimer() for gradual movement.']
    ]
  },
  drag: {
    headline: 'Drag a real Turtle shape',
    note: 'Begin with the built-in Turtle cursor. An old rectangle or star drawn by a hidden pen is not automatically draggable.',
    steps: [
      ['1. Make an object that can be moved', 'Start a small practice file or add this ABOVE turtle.done().',
`star = turtle.Turtle()
star.shape("turtle")     # Try "circle" later
star.color("blue")
star.speed("fast")
star.penup()             # No drawing trail`,
'Run the file. Is there a visible Turtle shape to grab?'],
      ['2. Write one drag function', 'Turtle supplies x and y as the mouse moves. Your function tells the object to follow.',
`def follow_mouse(x, y):
    star.goto(x, y)
    screen.update()

star.ondrag(follow_mouse)`,
'Click and HOLD on the Turtle, then move your mouse. This is different from screen.onclick().'],
      ['3. Drop it near a destination (optional)', 'Only after dragging works, add a release function.',
`def drop_star(x, y):
    if y > 0:
        star.goto(0, 120)  # Snap to tree top

star.onrelease(drop_star)`,
'Change the destination to your tree. For a custom draggable image, you need a registered Turtle shape—advanced work.']
    ]
  },
  hover: {
    headline: 'Start with reveal-on-click; hover is advanced',
    note: 'Python Turtle has no built-in onhover() method. You can still create the same visitor experience with a click or key.',
    steps: [
      ['1. Detect a click on the scene', 'Start by printing a simple confirmation.',
`def show_clue(x, y):
    print("You found a clue!")

screen.onclick(show_clue)`,
'If this works, you have a usable interaction for younger visitors.'],
      ['2. Make a clue appear', 'Show one small clue with a separate pen.',
`clue_pen = turtle.Turtle()
clue_pen.hideturtle()
clue_pen.penup()

def show_clue(x, y):
    clue_pen.goto(0, 110)
    clue_pen.write("Hello!", align="center")
    screen.update()

screen.onclick(show_clue)`,
'Use clue_pen.clear() to remove only the clue. This is an achievable replacement for hover.'],
      ['3. Add a keyboard control', 'Keep your show_clue function. Add a second function to hide the clue with the space bar.',
`def hide_clue():
    clue_pen.clear()
    screen.update()

screen.onkey(hide_clue, "space")
screen.listen()`,
'True mouse-hover requires Tkinter mouse-motion binding and coordinate conversion. It is optional, not a beginner requirement.']
    ]
  }
};

function miniLabMarkup(id) {
  const lab = MINI_LABS[id];
  if (!lab) return '';
  const r = record(id);
  const n = Math.max(0, Math.min(3, r.miniStep || 0));
  const steps = lab.steps;
  r.miniResponses ||= ['', '', ''];
  const cards = steps.map((step, i) => {
    const visible = i === n || (n === 3 && i === 2);
    return `<div class="mini-step ${i < n ? 'mini-finished' : ''} ${visible ? 'mini-current' : ''}">
      <div class="mini-step-head"><span class="mini-num">${i < n ? '✓' : i + 1}</span><strong>${esc(step[0])}</strong></div>
      ${visible ? `<div class="mini-step-body">
        <p>${esc(step[1])}</p>
        <pre>${esc(step[2])}</pre>
        <p class="mini-test"><strong>TEST IT:</strong> ${esc(step[3])}</p>
        <label for="mini-answer" class="mini-answer-label">What happened when you ran your code?</label>
        <textarea id="mini-answer" class="mini-answer" rows="2" placeholder="I tested it and noticed...">${esc(r.miniResponses[i] || '')}</textarea>
        <p id="mini-answer-error" class="mini-error" role="alert"></p>
        ${n < 3 ? `<button type="button" class="mini-advance" data-mini-next="${i + 1}">I tested this. Next step →</button>` : `<span class="mini-done-note">Practice finished. Now adapt this to your winter scene.</span>`}
      </div>` : (i < n ? `<p class="mini-revisit">Tested. <button type="button" data-mini-back="${i}">Review</button></p>` : '<p class="mini-locked">Complete the step above to open this one.</p>')}
    </div>`;
  }).join('');
  const treeExtra = id === 'toggle' && n === 3 ? `<details class="mini-reference"><summary>Extra help: My trees use coordinate lists. What replaces the gold dot?</summary><p>Inside your existing <code>if gold_on:</code> block, you can trace the leaf points instead of calling <code>dot()</code>. This draws gold over the original green without changing <code>draw_tree(tree_points)</code>.</p><pre>${esc(`leaves = tree_1[1]  # Tree leaves, not trunk
gold_pen.goto(leaves[0])
gold_pen.pendown()
gold_pen.color("gold")
gold_pen.begin_fill()
for point in leaves:
    gold_pen.goto(point)
gold_pen.goto(leaves[0])
gold_pen.end_fill()
gold_pen.penup()` )}</pre><p>Try it with one tree first. For all four trees, repeat with the other leaf lists or explore a for loop.</p></details>` : '';
  return `<section id="beginner-minilab" class="beginner-minilab" aria-label="Step-by-step coding practice">
    <div class="mini-kicker">GUIDED PYTHON PRACTICE · 3 SMALL TESTS</div>
    <h3>${esc(lab.headline)}</h3><p>${esc(lab.note)}</p>
    <div class="mini-rule"><strong>How to use the code:</strong> Your project should already have <code>import turtle</code> and <code>screen = turtle.Screen()</code>. Add each experiment <em>before</em> <code>turtle.done()</code>. <strong>Replace</strong> the previous event handler when moving to the next step; do not register multiple competing <code>screen.onclick()</code> functions. Keep your original winter drawing saved.</div>
    ${cards}
    ${n === 3 ? `<div class="mini-final"><strong>YOUR TURN:</strong> What will you change in this example so it works with your own ${esc(SKILLS[id].title.toLowerCase())}? Test it in VS Code, then use the lesson checklist below.</div>` : ''}
    ${treeExtra}
  </section>`;
}

// Swap only the long Lesson 3 introduction for interactive micro-lessons.
const priorWinterLessonThree = lessonThree;
lessonThree = function(s, id, r) {
  let html = priorWinterLessonThree(s, id, r);
  const oldBasics = eventBasics(id);
  const newBasics = miniLabMarkup(id) +
    `<details class="mini-reference"><summary>Optional: Turtle event and method reference</summary>${oldBasics}</details>`;
  if (html.includes(oldBasics)) html = html.replace(oldBasics, newBasics);
  return html;
};

// One click listener works even after the lesson is rerendered.
document.addEventListener('click', e => {
  const next = e.target.closest('[data-mini-next]');
  const back = e.target.closest('[data-mini-back]');
  if (!next && !back) return;
  const routeInfo = route();
  if (routeInfo.home || routeInfo.step !== 3) return;
  const r = record(routeInfo.id);
  r.miniResponses ||= ['', '', ''];
  if (next) {
    const answer = document.getElementById('mini-answer')?.value.trim() || '';
    if (answer.length < 8) {
      const error = document.getElementById('mini-answer-error');
      if (error) error.textContent = 'First, write a short sentence about what happened when you tested the code.';
      return;
    }
    r.miniResponses[Number(next.dataset.miniNext) - 1] = answer;
  }
  r.miniStep = Number(next ? next.dataset.miniNext : back.dataset.miniBack);
  save();
  const node = document.getElementById('beginner-minilab');
  if (node) node.outerHTML = miniLabMarkup(routeInfo.id);
});
document.addEventListener('input', e => {
  if (e.target.id !== 'mini-answer') return;
  const current = route();
  if (current.home || current.step !== 3) return;
  const r = record(current.id);
  r.miniResponses ||= ['', '', ''];
  r.miniResponses[Math.min(2, r.miniStep || 0)] = e.target.value;
  save();
});

const beginnerLabStyles = document.createElement('style');
beginnerLabStyles.textContent = `
.beginner-minilab{margin:18px 0 30px;padding:24px;background:#edf5ef;border:1px solid #cadecf;border-radius:20px;color:#18362b}
.mini-kicker{color:#8a423b;font-size:12px;font-weight:800;letter-spacing:.13em}
.beginner-minilab h3{font-size:clamp(22px,2.8vw,31px);line-height:1.2;margin:10px 0}
.beginner-minilab>p{font-size:16px;line-height:1.6;margin:0 0 17px}
.mini-rule{background:#fffdf6;border:1px solid #e7dbc3;border-radius:12px;padding:15px 17px;font-size:14px;line-height:1.6;margin-bottom:18px}
.mini-rule code{font-size:13px;background:#f3eadb;padding:2px 4px;border-radius:4px}
.mini-step{background:white;border:1px solid #dae5dc;border-radius:13px;margin-top:11px;overflow:hidden}
.mini-current{border:2px solid #317e64;box-shadow:0 8px 24px rgba(31,83,65,.08)}
.mini-step-head{display:flex;align-items:center;gap:12px;padding:15px 17px;font-size:16px;color:#1c4033}
.mini-num{display:inline-grid;place-items:center;flex:none;border-radius:50%;height:30px;width:30px;background:#e7f2ea;font-weight:900;font-size:13px}
.mini-current .mini-num{background:#267257;color:white}
.mini-step-body{padding:0 17px 18px}
.mini-step-body>p{margin:3px 0 13px;line-height:1.55;font-size:15px}
.mini-step-body pre{display:block;width:100%;overflow:auto;margin:12px 0;background:#172c27;color:#f5f8f1;border-radius:12px;padding:16px;font:14px/1.65 'Consolas','Courier New',monospace;white-space:pre;tab-size:4}
.mini-step-body .mini-test{padding:13px;background:#fff8e9;border-left:4px solid #c9a154;border-radius:7px}
.mini-answer-label{display:block;font-size:14px;font-weight:750;margin:10px 0 6px;color:#214a3a}
.mini-answer{display:block;width:100%;box-sizing:border-box;border:1px solid #b9cbbd;background:#fcfffd;color:#18362b;padding:12px;border-radius:9px;font-size:15px;line-height:1.5;font-family:inherit;resize:vertical}
.mini-error{font-size:13px;color:#a13737;margin:5px 0;min-height:2px}
.mini-advance{background:#a74245;color:white;border:0;padding:12px 18px;border-radius:9px;cursor:pointer;font-size:14px;font-weight:800}
.mini-advance:hover{background:#813234}
.mini-locked,.mini-revisit{margin:0;padding:0 18px 14px;font-size:13px;color:#687d70}
.mini-revisit button{border:0;background:transparent;text-decoration:underline;color:#267257;cursor:pointer;font-weight:700}
.mini-final{padding:15px 17px;margin-top:14px;background:#fff3d5;border:1px solid #e6c780;border-radius:12px;line-height:1.55}
.mini-done-note{font-weight:700;color:#217051}
.mini-reference{margin:10px 0 20px;border:1px solid #d6e1d9;border-radius:12px;padding:12px 17px}
.mini-reference>summary{font-weight:800;cursor:pointer;color:#276951}
.mini-reference>.activity{margin-top:18px}
@media(max-width:650px){.beginner-minilab{padding:16px}.mini-step-body pre{font-size:12px;padding:12px}.mini-step-head{font-size:15px}}
`;
document.head.appendChild(beginnerLabStyles);
/* END beginner mini-labs. */


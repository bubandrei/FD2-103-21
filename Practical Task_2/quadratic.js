function quadraticEquation(a,b,c){
    let discriminant = (Math.pow(b,2)-4*a*c);
    let firstValue = (a==0?"":(a==-1?"-":a==1?"":a)+"x^2");
    let secondValue = (b==0?"":(b==-1?" - ":b==1?" + ":b<-1?" - "+(-b):" + "+b)+"x"); 
    let thirdValue = (c==0?"":(c>=0?" + "+c:" - "+(-c)));
    
    if(discriminant < 0){
        console.log(`Уравнение ${firstValue}${secondValue}${thirdValue} = 0 не имеет вещественных корней`);
      } else if(discriminant === 0){
        let x = (-b/(2*a));
        console.log(`Уравнение ${firstValue}${secondValue}${thirdValue} = 0 имеет один корень x = ${x}`);
      } else {
        let x1 = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
        let x2 = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
        console.log(`Уравнение ${firstValue}${secondValue}${thirdValue} = 0 имеет корни x1 = ${x1} и x2 = ${x2}`);  
      }
    }
  quadraticEquation(-1, 1, 1)
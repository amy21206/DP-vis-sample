// import visualization libraries {
const { Tracer, Array1DTracer, Array2DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
// }

const C = ['-', 2, 4, 3, 6, 8, 10];

const n = C.length-1;
const F = [0,0,0,0,0,0,0];

//define tracer variables {
const tracer1 = new Array1DTracer('Coins');
const tracer2 = new Array1DTracer('Memo');
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer1, tracer2, logger]));
tracer1.set(C);
tracer2.set(F);
Tracer.delay();
//}

let i;

F[0] = 0;
F[1] = C[1];

logger.println(`Base 0: no coin C[${1}] = ${C[1]}, F[${0}] = 0`);
logger.println(`Base 1: take coin C[${1}], F[${1}] = ${C[1]}`);
tracer2.set(F);
for(i = 2;i<=n;i++) {
    logger.println(`Option 1: take coin C[${i}] = ${C[i]}, F[${i}] = ${C[i] + F[i-2]}`);
    logger.println(`Option 2: no coin C[${i}], F[${i}] = ${F[i-1]}`);

    F[i] = Math.max(C[i] + F[i-2], F[i-1]);
    // visualize {
  tracer1.select(i);
  tracer2.select(i - 2, i - 1);
  Tracer.delay();
  tracer2.patch(i, F[i]);
  Tracer.delay();
  tracer2.depatch(i);
  tracer2.deselect(i - 2, i - 1);
  tracer1.deselect(i);
  // }
}

logger.println(`Max coin value is ${F[n]}`);



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('useForLoop')
            .addEventListener('click', () => useLoop('for'));
    document.getElementById('useRecursion')
            .addEventListener('click', () => useLoop('recursion'));
  });

const useLoop = function(loopType) {
    if (!document.getElementById('form').checkValidity()) {
        document.getElementById('result').innerHTML = 'You must enter the number of iterations.';
        return;
    }

    const numberOfIterations = document.getElementById('numberOfIterations').value;

    const startTime = performance.now();
    let iterations;
    try {
        iterations = loopType == 'for' ? executeForLoop(numberOfIterations) : executeRecursiveLoop(numberOfIterations, 1);

    } catch(error) {
        const endTime = performance.now();
        const elapsedTime = (endTime - startTime) / 1000;
        document.getElementById('result').innerHTML = 'After ' + elapsedTime + ' seconds of executing the ' + loopType + ' loop the following error is thrown: <br/>' + error;
        return;
    }
    const endTime = performance.now();
    const elapsedTime = (endTime - startTime) / 1000;
    document.getElementById('result').innerHTML = 'The ' + loopType + ' loop iterated ' + iterations + ' times in ' + elapsedTime + ' seconds.';
}

const executeForLoop = function(numberOfIterations) {
    iterations = 0;
    for (i = 0; i < numberOfIterations; i++) {
        iterations++;
    }
    return iterations;
}

const executeRecursiveLoop = function(numberOfIterations, iterations) {
    if (numberOfIterations == iterations) {
        return iterations;
    } else {
        return executeRecursiveLoop(numberOfIterations, ++iterations);
    }
}
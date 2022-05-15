let dummyCollection;
async function doStuff(par1, par2) {
    return par1+ par2;
  }
  // doStuff is defined inside the module so we can call it wherever we want
  
// Export it to make it available outside
module.exports.doStuff = doStuff;

module.exports = async ({deployments, getUnnamedAccounts}) => {
  const {deploy} = deployments;
  const [owner] = await getUnnamedAccounts();
  await deploy('MyContract', { from: owner, args: [5] }); //los parámetros del constructor se pasan mediante args
}
const { ethers } = require("hardhat"); //hardhat ya lo importa y no sería necesario

require("chai").should();

describe('1) Tests for Token contract', () => {
  it('Deployment should assign total supply to owner', async () => {
    //const signers = await ethers.getSigners(); //Desestructuro en owner
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token"); //getContractFactory está inyectada por Hardhat
    const MBT = await Token.deploy();
    const totalSupply = await MBT.totalSupply();
    const ownerBalance = await MBT.balanceOf(owner.address);
    totalSupply.should.equal(ownerBalance);
  });

  it('Should transfer tokens between accounts', async () => {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token"); //getContractFactory está inyectada por Hardhat
    const MBT = await Token.deploy();
    // Transfer 50 tokens from owner to addr1
    await MBT.transfer(addr1.address, 50);
    (await MBT.balanceOf(addr1.address)).should.equal(50);
    // Transfer 50 tokens from addr1 to addr2
    await MBT.connect(addr1).transfer(addr2.address, 50); 
    (await MBT.balanceOf(addr2.address)).should.equal(50);
    await MBT.connect(addr1).transfer(addr2.address, 60).should.be.revertedWith("Not enough tokens");
  });

  it('Should emit transfer event', async () => {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token"); //getContractFactory está inyectada por Hardhat
    const MBT = await Token.deploy();
    // Transfer 50 tokens from owner to addr1
    await MBT.transfer(addr1.address, 50)
      .should.emit(MBT, "Transfer")
      .withArgs(owner.address, addr1.address, 50);
  });
})

import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  // afterEach(() => {
  //   // tear down
  // });
  
  // beforeAll()
  // afterAll()


  it('should increment totalVotes when upvoted', () => {
    //  Arrange
    // const component = new VoteComponent();
    //  Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decreament totalVotes when downvoted', () => {    
    component.downVote();
    
    expect(component.totalVotes).toBe(-1);
  });
});
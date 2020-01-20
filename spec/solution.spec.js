let solution = require('../solution.js');

describe('solution', () => {
    it('should not allow Js pawn to take As pawn when it is against the wall', () => {
        let B = []
        B[0] = ['.', '.', '.']
        B[1] = ['.', '.', 'X']
        B[1] = ['.', 'O', '.']

        expect(solution(B)).toEqual(0);
    })

    it('should not allow Js pawn to take As pawn when it is vertically aligned', () => {
        let B = []
        B[0] = ['.', '.', '.']
        B[1] = ['.', 'X', '.']
        B[1] = ['.', 'O', '.']

        expect(solution(B)).toEqual(0);
    })

    it('should not allow Js pawn to take As pawn when it is in the corner', () => {
        let B = []
        B[0] = ['.', '.', 'X']
        B[1] = ['.', 'O', '.']
        B[1] = ['.', '.', '.']

        expect(solution(B)).toEqual(0);
    })

    it('should not allow Js pawn to take As pawn when there is another behind', () => {
        let B = []
        B[0] = ['.', '.', 'X']
        B[1] = ['.', 'X', '.']
        B[1] = ['O', '.', '.']

        expect(solution(B)).toEqual(0);
    })
})

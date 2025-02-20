function changeSerialCode(serial) {

    
       // 유효성 검사: 시리얼 번호는 8자리 문자열이어야 함
    if (serial.length !== 8) {
        console.log("유효하지 않은 시리얼 번호입니다.");
    }

    // 숫자를 알파벳으로 변환하는 함수 (첫 번째 자리만 변환)
    const numberToAlphabet = (num) => {
        const alphabetMap = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q'];
        return alphabetMap[parseInt(num, 10)];
    };
    const firstChar = serial.slice(0, 1);

    const apartment = isNaN(firstChar) 
    ? firstChar.toUpperCase() // If it's not a number, keep it as is
    : numberToAlphabet(parseInt(firstChar));   // 첫 번째 자리 (아파트 번호를 알파벳으로 변환)

    const building = serial.slice(1, 4);                      // 다음 세 자리 (동 번호 그대로)
    const unit = serial.slice(4); 
    
    return {
        apartment: `${apartment}아파트`,
        building: `${building}동`,
        unit: `${unit}호`
    };

}

export default changeSerialCode;

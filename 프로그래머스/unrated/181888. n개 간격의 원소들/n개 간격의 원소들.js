function solution(num_list, n) {
    return num_list.filter((num, index) => index % n === 0);
}
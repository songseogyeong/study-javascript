// 게시글 작성
// 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리한다.

// 게시글 목록
// 게시글 조회
// 게시글 수정
// 게시글 삭제

const postService = (() => {
    // 게시글 작성
    // 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리한다.
    const write = ({ title, content, ...rest }, callback) => {
        if (callback) {
            callback(...rest);
        }
    };

    // 게시글 목록
    const getList = (callback) => {
        const posts = [{}, {}];
        if (callback) {
            callback(posts || []);
        }
    };

    // 게시글 조회
    const findById = (id, callback) => {
        const post = {
            id: 1,
            title: "테스트 제목1",
            content: "테스트 내용1",
            files: [],
        };

        if (callback) {
            callback(post);
        }
    };

    // 게시글 수정
    const update = ({ id, title, content, files }, callback) => {
        if (callback) {
            callback(files);
        }
    };

    // 게시글 삭제
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        findById: findById,
        update: update,
        remove: remove,
    };
})();

// 게시글 추가
const post = {
    title: "테스트 제목1",
    content: "테스트 내용1",
    fileName: "",
    filePath: "",
    fileSize: "",
};

// 게시글 작성
postService.write(post, fileService.insert);

// 게시글 목록
postService.getList((posts) => {
    if (!posts.length) {
        console.log("게시글이 없습니다.");
        return;
    }
    console.log(posts);
});

// 게시글 조회
postService.findById(1, (post) => {
    console.log(post);
    post.title = "수정된 제목1";
    // 게시글 수정
    postService.update(post);
    // 게시글 삭제
    postService.remove(post.id);
});
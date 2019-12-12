const gulpLess = require('gulp-less')
const path = require('path')
const { src, dest, task } = require('gulp')
const rename = require('gulp-rename')

const cssConcatSequence = [
  'source/_less/common.css',
  'source/_less/layout.css',
  'source/_less/variables.css',
  'source/_less/nav.css',
  'source/_less/index.css',
  'source/_less/page.css',
  'source/_less/post.css',
  'source/_less/theme.css',
  'source/_less/tag.css',
  'source/_less/archive.css',
  'source/_less/about.css',
  'source/_less/diff.css',
  'source/_less/toc.css',
  'source/_less/hightlight.css',
  'source/_less/gitment.css',
  'source/_less/_partial/footer.css',
  'source/_less/_partial/donate.css'
]

task('less', function(){
  return src('./source/_less/main.less')
    .pipe(
      gulpLess({
        paths: [path.join(__dirname, 'source/_less/main.less')]
      })
    )
    .pipe(rename(function (path) {
      // Updates the object in-place
      // path.dirname += "/ciao";
      path.basename = "aircloud";
      path.extname = ".css";
    }))
    .pipe(dest('./source/css/'))
})

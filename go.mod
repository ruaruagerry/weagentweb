module weagentweb

go 1.12

replace (
	cloud.google.com/go => github.com/googleapis/google-cloud-go v0.34.0
	golang.org/x/crypto => github.com/golang/crypto v0.0.0-20190621222207-cc06ce4a13d4
	golang.org/x/exp => github.com/golang/exp v0.0.0-20190731235908-ec7cb31e5a56
	golang.org/x/image => github.com/golang/image v0.0.0-20190227222117-0694c2d4d067
	golang.org/x/lint => github.com/golang/lint v0.0.0-20190409202823-959b441ac422
	golang.org/x/mobile => github.com/golang/mobile v0.0.0-20190312151609-d3739f865fa6
	golang.org/x/mod => github.com/golang/mod v0.1.0
	golang.org/x/net => github.com/golang/net v0.0.0-20190620200207-3b0461eec859
	golang.org/x/oauth2 => github.com/golang/oauth2 v0.0.0-20190523182746-aaccbc9213b0
	golang.org/x/sync => github.com/golang/sync v0.0.0-20190423024810-112230192c58
	golang.org/x/sys => github.com/golang/sys v0.0.0-20190624142023-c5567b49c5d0
	golang.org/x/text => github.com/golang/text v0.3.2
	golang.org/x/time => github.com/golang/time v0.0.0-20190308202827-9d24e82272b4
	golang.org/x/tools => github.com/golang/tools v0.0.0-20181219222714-6e267b5cc78e
	google.golang.org/appengine => github.com/golang/appengine v1.3.0
	google.golang.org/genproto => github.com/google/go-genproto v0.0.0-20190522204451-c2c4e71fbf69
	google.golang.org/grpc => github.com/grpc/grpc-go v1.23.0
)

require (
	github.com/DisposaBoy/JsonConfigReader v0.0.0-20171218180944-5ea4d0ddac55
	github.com/fvbock/endless v0.0.0-20170109170031-447134032cb6
	github.com/garyburd/redigo v1.6.0
	github.com/go-sql-driver/mysql v1.4.1
	github.com/go-xorm/xorm v0.7.6
	github.com/golang/protobuf v1.3.2
	github.com/google/go-cmp v0.2.0 // indirect
	github.com/julienschmidt/httprouter v1.2.0
	github.com/robfig/cron v1.2.0
	github.com/rs/cors v1.7.0
	github.com/sirupsen/logrus v1.4.2
	github.com/streadway/amqp v0.0.0-20190827072141-edfb9018d271
	github.com/stretchr/testify v1.3.0
)

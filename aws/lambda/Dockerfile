FROM public.ecr.aws/lambda/python:3.12
RUN pip install boto3
COPY visitor_counter.py ${LAMBDA_TASK_ROOT}
CMD ["visitor_counter.lambda_handler"]